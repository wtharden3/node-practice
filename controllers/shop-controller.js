const Product = require('../models/product-model');

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      docTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      docTitle: 'Products',
      path: '/products',
      hasProducts: products.length > 0,
      productCSS: true,
      activeShop: true,
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    docTitle: 'Cart',
    path: '/cart',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    docTitle: 'Checkout',
    path: '/checkout',
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    docTitle: 'Orders',
    path: '/orders'
  })
}
