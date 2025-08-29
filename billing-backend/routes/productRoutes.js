import express from "express";
import multer from "multer";
import Product from "../models/Product.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Add product
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, sku, unit, category, price } = req.body;
    const image = req.file ? req.file.filename : null;

    const product = new Product({ name, sku, unit, category, price, image });
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// List products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

export default router;
