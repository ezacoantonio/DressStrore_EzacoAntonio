//import product model
const Product = require('../models/products'); 

//create product
exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
};

//get list of products
exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
};

//get product by id
exports.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.status(200).send(product);
  };

//update product by id
exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).send('Product not found');
    res.status(200).send(product);
  };

//delete product by id
exports.deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.status(200).send(product);
  };

//list product by category
exports.getProductsByCategory = async (req, res) => {
    const category = req.params.category;
    const products = await Product.find({ category: category });
    if (!products.length) return res.status(404).send('No products found in this category');
    res.status(200).send(products);
  };