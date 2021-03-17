require('dotenv').config();
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const {useError} = require('./controllers/error-controller')
// const Handlebars = require('express-handlebars');

const app = express();

// ejs
app.set('view engine', 'ejs');

//handlebars
// app.engine('hbs', Handlebars({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout.hbs', extname: 'hbs'}));
// app.set('view engine', 'hbs');

// pug
// app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT;

const adminRoutes = require('./routes/admin-routes');
const shopRoutes = require('./routes/shop-routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); //makes files in the public folder static and accessible ex. main.css. Images are another example of what can go in this folder

// .use for any method for this endpoint
// app.use('/add-product', (req, res, next) => {
//   // console.log('in the midware')
//   res.send( '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>');
//   // next() // allows the request to move on to the next middleware in line
// }) // .use() allows us to add a new middleware function. it's from express which is all about middleware

//use .post() to use for only post requests using this endpoint
// app.post('/product', (req, res, next) => {
//   console.log('product added');
//   // res.send('<h2>Product added successfully!</h2>')
//   console.log('req.body ===> ', req.body)
//   res.redirect('/')
// })

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// app.use('/', (req, res, next) => {
//   // console.log('in another midware')
//   res.send( '<h1>Hey you there</h1>') // .send() allows us to send a response
// })

app.use(useError);

app.listen(port, () => {
  console.log(
    `[SERVER]: You are now practicing on port ${port}. http://127.0.0.1:${port}/ or http://127.0.0.1:${port}/admin/add-product`
  );
});
