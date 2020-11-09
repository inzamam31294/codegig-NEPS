const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes/gigs')
const db = require('./config/database')

const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

db.authenticate()
  .then(() => {
    console.log('Database Connected...!')
  })
  .catch((err) => {
    console.log(err)
  })

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.render('index', { layout: 'landing' }))

app.use('/gigs', routes)

app.listen(PORT, console.log(`App is listening to port ${PORT}`))
