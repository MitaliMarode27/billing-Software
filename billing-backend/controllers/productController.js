import Purchase from "../models/purchase.js";

// Add Product
export const addProduct = async (req, res) => {
  try {
    const newProduct = new Purchase(req.body);
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Purchase.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
