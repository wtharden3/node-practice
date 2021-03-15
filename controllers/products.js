// const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin', {
    docTitle: 'Admin Portal',
    path: '/admin/add-product',
    activeAdmin: true,
  });
  // next() // allows the request to move on to the next middleware in line
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  // console.log('products ==> ', products);
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      docTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      productCSS: true,
      activeShop: true,
    });
  });
};
