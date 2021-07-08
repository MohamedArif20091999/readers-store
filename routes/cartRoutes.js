const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cart');
const requireAuth = require('../middlewares/requireAuth');

router.get('/user-cart', requireAuth, cartsController.getCart);
router.post('/add-to-cart', cartsController.addToCart);
router.post('/delete-item', cartsController.deleteItem);

module.exports = router;
