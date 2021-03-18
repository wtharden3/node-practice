const path = require('path');
const router = require('express').Router();
const {getIndex, getProducts, getProductById, getCart, getCheckout, getOrders} = require('../controllers/shop-controller')

router.get('/', getIndex)
router.get('/products', getProducts)
router.get('/products/:productId', getProductById)
router.get('/cart', getCart)
router.get('/orders', getOrders)
router.get('/checkout', getCheckout)

module.exports = router