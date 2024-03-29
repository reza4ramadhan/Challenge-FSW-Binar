const express = require('express')
const router = express.Router()
const game = require('../controller/game')
const middlewareAuth = require('../middleware/middlewareAuth')

router.get('/game', middlewareAuth.isAuthenticated, game.gameView)

module.exports = router
