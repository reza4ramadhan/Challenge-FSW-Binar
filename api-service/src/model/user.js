require('dotenv').config
const mongoose = require('mongoose')
const db = require('./config')
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
})
const userGame = new mongoose.model('userGame', userSchema)
module.exports = userGame
