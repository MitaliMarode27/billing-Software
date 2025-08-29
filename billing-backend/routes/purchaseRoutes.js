// routes/purchaseRoutes.js
import express from "express";
import Purchase from "../models/purchase.js";

const router = express.Router();

// Add a new purchase
router.post("/", async (req, res) => {
  try {
    const purchase = new Purchase(req.body);
    await purchase.save();
    res.status(201).json(purchase);
  } catch (err) {
    console.error("Error saving purchase:", err);
    res.status(500).json({ message: "Failed to save purchase", error: err });
  }
});

// Get all purchases
router.get("/", async (req, res) => {
  try {
    const purchases = await Purchase.find().populate("products.productId");
    res.json(purchases);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch purchases", error: err });
  }
});

export default router;
