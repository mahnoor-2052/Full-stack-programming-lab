const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, count: products.length, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create a new product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT update a product
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE a product
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Product not found' });
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST seed sample products
router.post('/seed/data', async (req, res) => {
  try {
    await Product.deleteMany();
    const sampleProducts = [
      { name: 'Wireless Headphones', description: 'Premium noise-cancelling headphones', price: 99.99, category: 'Electronics', stock: 50, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
      { name: 'Running Shoes', description: 'Lightweight and comfortable running shoes', price: 59.99, category: 'Footwear', stock: 30, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
      { name: 'Backpack', description: 'Durable travel backpack with USB port', price: 45.00, category: 'Bags', stock: 20, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
      { name: 'Smart Watch', description: 'Fitness tracker with heart rate monitor', price: 149.99, category: 'Electronics', stock: 15, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
      { name: 'Sunglasses', description: 'UV400 protection polarized sunglasses', price: 29.99, category: 'Accessories', stock: 100, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400' },
      { name: 'Laptop Stand', description: 'Adjustable aluminum laptop stand', price: 39.99, category: 'Electronics', stock: 40, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400' },
    ];
    const inserted = await Product.insertMany(sampleProducts);
    res.json({ success: true, message: `${inserted.length} products seeded`, data: inserted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
