const express = require('express')
const { home } = require('../controller/auth')
const router = express.Router()
const auth = require('./auth')
const passport = require('passport')

router.use('/user', auth)
router.get('/', passport.authenticate('jwt', { session: false }), home)

module.exports = router
