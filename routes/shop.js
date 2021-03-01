const path = require('path');
const router = require('express').Router();
const rootDir = require('../util/path')

router.get('/', (req, res, next) => {
  const shopPath = path.join(rootDir, 'views', 'shop.html');
  res.sendFile(shopPath) // .send() allows us to send a response
})

module.exports = router