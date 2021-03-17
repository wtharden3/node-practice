const Product = require('../models/product-model');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    docTitle: 'Add Product',
    path: '/admin/add-product',
    activeAdmin: true,
  });
  // next() // allows the request to move on to the next middleware in line
};

exports.postAddProduct = (req, res, next) => {
  const { title, description, imgUrl, price } = req.body;
  const product = new Product(title, imgUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      docTitle: 'Admin Products',
      hasProducts: products.length > 0,
      path: '/admin/products',
      activeAdmin: true,
    });
  });
  // next() // allows the request to move on to the next middleware in line
};

exports.getEditProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    docTitle: 'Edit Product',
    path: '/admin/edit-product'
  })
}
