const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: true }));

app.use('/add-product', (req, res, next) => {
  // console.log('in the midware')
  res.send( '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
  // next() // allows the request to move on to the next middleware in line
}) // .use() allows us to add a new middleware function. it's from express which is all about middleware

app.use('/product', (req, res, next) => {
  console.log('product added');
  // res.send('<h2>Product added successfully!</h2>')
  console.log('req.body ===> ', req.body)
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  // console.log('in another midware')
  res.send( '<h1>Hey you there</h1>') // .send() allows us to send a response
})

app.listen(3001, () => {
  console.log('[SERVER]: You are now practicing on port 3001. http://127.0.0.1:3001/')
})