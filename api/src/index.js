
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Framework and Libs
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
//

// Modules
const routes = require('./routes/index')
//

const app = express()

app.use(express.json())
app.use(cors())

const dbUrl = process.env.DB_URL

// Connection
mongoose.connect(dbUrl)
//

routes(app)

app.listen(5000, () => {
  console.log('Listening on port 5000')
})


