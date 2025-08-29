import express from "express";
import Sale from "../models/sale.js";  // adjust path if needed

const router = express.Router();

// GET /api/sales - Get all sales
router.get("/", async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (err) {
    console.error("Error fetching sales:", err);
    res.status(500).json({ error: "Error fetching sales" });
  }
});

// POST /api/sales - Create a new sale
router.post("/", async (req, res) => {
  try {
    const sale = new Sale(req.body);
    await sale.save();
    res.status(201).json(sale);
  } catch (err) {
    console.error("Error creating sale:", err);
    res.status(500).json({ error: "Error creating sale" });
  }
});

export default router;
