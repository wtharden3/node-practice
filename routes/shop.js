const path = require('path');
const router = require('express').Router();
const rootDir = require('../util/path')

const adminData = require('./admin');

router.get('/', (req, res, next) => {

  // console.log(adminData.products);
  // const shopPath = path.join(rootDir, 'views', 'shop.html');
  // res.sendFile(shopPath) // .send() allows us to send a response
  const products = adminData.products;
  res.render('shop', {prods: products, docTitle: 'Shop', path: '/', hasProducts: products.length > 0, productCSS: true, activeShop: true})
})

module.exports = router