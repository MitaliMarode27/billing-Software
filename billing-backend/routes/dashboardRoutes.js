import express from 'express';
import Order from '../models/dashboardModels.js'; // Create this model

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 