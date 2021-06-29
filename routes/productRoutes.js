const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

router.get('/all-products', productsController.getProducts);
router.post('/add-product', productsController.addProduct);

module.exports = router;
