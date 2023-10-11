const express = require('express');

// product controller for products route
const productController = require('../controllers/products'); 

//category controller for categories route
const categoryController =  require('../controllers/categories');

// create a router object
const router = express.Router();

// write a comment for the following code block

router.get('/', (req, res) => {
  res.send('Welcome to Dress Store API, use PostMan to test endpoints');
});

/*
    Routes for the product collection
*/
//create product
router.post('/product/create', productController.createProduct);
//get list of products
router.get('/products', productController.getProducts);
//get product by id
router.get('/product/:id', productController.getProduct);
//update product by id
router.put('/product/:id', productController.updateProduct);
//delete product by id
router.delete('/product/:id', productController.deleteProduct);

/*

    Routes for the category collection

 */

//create category
router.post('/category/create', categoryController.createCategory);
//list all categories
router.get('/categories',categoryController.getCategories);
//list category by id
router.get('/category/:id', categoryController.getCategory);
//update category by id
router.put('/category/:id', categoryController.updateCategory);
//delete category by id
router.delete('/category/:id', categoryController.deleteCategory);

//search products by category
router.get('/products/category/:category', productController.getProductsByCategory);

module.exports = router;