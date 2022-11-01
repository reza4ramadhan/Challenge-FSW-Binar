//Import the mongoose module
require('dotenv').config()
const mongoose = require('mongoose')

//Set up default mongoose connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//Get the default connection
const db = mongoose.connection

module.exports = db
