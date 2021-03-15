const path = require('path');
const router = require('express').Router();
const productsController = require('../controllers/products')

router.use(require('express').urlencoded({ extended: true }));

// .get for any method for this endpoint
router.get('/add-product', productsController.getAddProduct); // .use() allows us to add a new middleware function. it's from express which is all about middleware
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
