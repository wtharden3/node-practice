const path = require('path');
const router = require('express').Router();
const rootDir = require('../util/path')

const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  const shopPath = path.join(rootDir, 'views', 'shop.html');
  res.sendFile(shopPath) // .send() allows us to send a response
})

module.exports = router