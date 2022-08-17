const express = require('express')
const router = express.Router()
const game = require('../controller/game')
router.get('/game', game.gameView)

module.exports = game
