const path = require('path');
const router = require('express').Router();
const {getAddProduct, postAddProduct, getAdminProducts, getEditProduct} = require('../controllers/admin-controller')

router.use(require('express').urlencoded({ extended: true }));

// .get for any method for this endpoint
router.get('/add-product', getAddProduct); // .use() allows us to add a new middleware function. it's from express which is all about middleware
router.post('/add-product', postAddProduct);
router.get('/products', getAdminProducts);
router.get('/edit-product', getEditProduct)

module.exports = router;
