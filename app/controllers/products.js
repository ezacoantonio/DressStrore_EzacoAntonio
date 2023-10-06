const mongoose = require('mongoose');
const Product = require('../models/products');  // Adjust the path as needed


// CREATE
async function createProduct(req, res) {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}


// READ
async function getProducts() {
    const products = await Product.find();
    console.log(products);
    return products;
}

async function getProduct(id) {
    const product = await Product.findById(id);
    console.log(product);
}

// UPDATE
async function updateProduct(id, name, description, price, quantity) {
    const product = await Product.findById(id);
    if (!product) return;

    product.name = name;
    product.description = description;
    product.price = price;
    product.quantity = quantity;

    const result = await product.save();
    console.log(result);
}

// DELETE
async function removeProduct(id) {
    const result = await Product.deleteOne({ _id: id });
    console.log(result);
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    removeProduct
};
