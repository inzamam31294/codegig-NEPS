const express = require('express')
const exhbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes/gigs')
const db = require('./config/database')

const app = express()

db.authenticate()
  .then(() => {
    console.log('Database Connected...!')
  })
  .catch((err) => {
    console.log(err)
  })

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('hello everyone!'))

app.use('/gigs', routes)

app.listen(PORT, console.log(`App is listening to port ${PORT}`))
