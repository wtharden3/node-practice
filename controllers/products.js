// const products = [];
// const Product = require('../models/product');

// exports.getAddProduct = (req, res, next) => {
//   res.render('admin/add-product', {
//     docTitle: 'Add Product',
//     path: '/admin/add-product',
//     activeAdmin: true,
//   });
//   // next() // allows the request to move on to the next middleware in line
// };

// exports.postAddProduct = (req, res, next) => {
//   // products.push({ title: req.body.title });
//   // console.log('products ==> ', products);
//   const product = new Product(req.body.title);
//   product.save();
//   res.redirect('/');
// };

// exports.getAdminProducts = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('admin/products', {
//       prods: products,
//       docTitle: 'Admin Products',
//       hasProducts: products.length > 0,
//       path: '/admin/products',
//       activeAdmin: true,
//     });
//   });
//   // next() // allows the request to move on to the next middleware in line
// };

// exports.getShop = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/product-list', {
//       prods: products,
//       docTitle: 'Shop',
//       path: '/',
//       hasProducts: products.length > 0,
//       productCSS: true,
//       activeShop: true,
//     });
//   });
// };

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll(products => {
//     res.render('shop/product-list', {
//       prods: products,
//       docTitle: 'Products',
//       path: '/products',
//       hasProducts: products.length > 0,
//       productCSS: true,
//       activeShop: true,
//     });
//   });
// };

// exports.getCart = (req, res, next) => {
//   res.render('shop/cart', {
//     docTitle: 'Cart',
//     path: '/cart',
//   });
// };
