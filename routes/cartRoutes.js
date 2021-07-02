const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cart');

router.get('/user-cart', cartsController.getCart);
router.post('/add-to-cart', cartsController.addToCart);

module.exports = router;
