const Product = require('../models/product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    // Create a new product
    const newProduct = new Product({ name, price });
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    // Delete the product
    await Product.findByIdAndDelete(productId);

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};
