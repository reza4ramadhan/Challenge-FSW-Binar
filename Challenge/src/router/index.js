const express = require('express')
const rootRouter = express.Router()
const auth = require('./authentication')

rootRouter.get('/', (req, res) => {
  res.send('Hello World!')
})
rootRouter.use(auth)
module.exports = rootRouter
