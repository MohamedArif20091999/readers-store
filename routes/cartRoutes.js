const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cart');

router.post('/add-to-cart', cartsController.addToCart);

module.exports = router;
