const router = require('express').Router();

// .get for any method for this endpoint
router.get('/add-product', (req, res, next) => {
  // console.log('in the midware')
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
  // next() // allows the request to move on to the next middleware in line
}); // .use() allows us to add a new middleware function. it's from express which is all about middleware

router.post('/add-product', (req, res, next) => {
  console.log('product added');
  // res.send('<h2>Product added successfully!</h2>')
  console.log('req.body ===> ', req.body);
  res.redirect('/');
});

module.exports = router;
