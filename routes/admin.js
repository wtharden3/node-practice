const path = require('path');
const router = require('express').Router();
const rootDir = require('../util/path')

const products = [];

router.use(require('express').urlencoded({ extended: true }));

// .get for any method for this endpoint
router.get('/add-product', (req, res, next) => {
  // const adminPath = path.join(rootDir, 'views', 'admin.html');
  // res.sendFile(adminPath);
  res.render('admin', {docTitle: 'Admin Portal', path: '/admin/add-product'})
  // next() // allows the request to move on to the next middleware in line
}); // .use() allows us to add a new middleware function. it's from express which is all about middleware

router.post('/add-product', (req, res, next) => {
  console.log('req.body ==>', req.body);
  console.log('req.body.title ==>', req.body.title);
  products.push({title: req.body.title});
  console.log('products ==> ', products)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
