var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);


/*
 * Require the products controller module.
 */
const productsController = require('../controllers/products');

router.post('/product/create', productsController.createProduct);
router.get('/products', productsController.getProducts);
router.get('/product/:id', productsController.getProduct);
router.put('/product/:id', productsController.updateProduct);
router.delete('/product/:id', productsController.removeProduct);

module.exports = router;

