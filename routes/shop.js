const router = require('express').Router();

router.get('/', (req, res, next) => {
  // console.log('in another midware')
  res.send( '<h1>Hey you there</h1>') // .send() allows us to send a response
})

module.exports = router