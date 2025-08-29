import express from "express";
import StockTransfer from "../models/stockTransfer.js"; // Adjust the path as necessary

const router = express.Router();

// Create Stock Transfer
router.post('/', async (req, res) => {
  console.log("POST /api/stock-transfers - req.body:", req.body);
  try {
    const newStockTransfer = new StockTransfer(req.body);
    const savedTransfer = await newStockTransfer.save();
    console.log("Stock Transfer saved:", savedTransfer);
    res.status(201).json(savedTransfer);
  } catch (error) {
    console.error("Error in saving stock transfer:", error);
    res.status(500).json({ message: "Failed to save stock transfer", error: error.message });
  }
});

// Get all Stock Transfers
router.get("/", async (req, res) => {
  try {
    const transfers = await StockTransfer.find().sort({ createdAt: -1 });
    res.json(transfers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching stock transfers", error });
  }
});

export default router;
