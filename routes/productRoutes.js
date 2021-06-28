const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

router.post('/add-product', productsController.addProduct);

module.exports = router;
