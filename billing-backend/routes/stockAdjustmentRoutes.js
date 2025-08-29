import express from 'express';
import StockAdjustment from '../models/StockAdjustment.js';

const router = express.Router();

// GET all stock adjustments
router.get('/', async (req, res) => {
  try {
    const adjustments = await StockAdjustment.find().sort({ date: -1 });
    res.json(adjustments);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch stock adjustments', error });
  }
});

// POST create new stock adjustment
router.post('/', async (req, res) => {
  try {
    console.log("📩 Incoming Stock Adjustment Data:", req.body);

    const newAdjustment = new StockAdjustment(req.body);
    const savedAdjustment = await newAdjustment.save();

    res.status(201).json(savedAdjustment);
  } catch (error) {
    console.error('❌ Error saving stock adjustment:', error.message);
    res.status(500).json({ 
      message: 'Failed to save stock adjustment', 
      error: error.message 
    });
  }
});
export default router;
