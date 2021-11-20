// Enviroment Variable Check
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


// Import Required Libs And Packeges and Decleareds
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')


// Declear and import routers from router
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')
const bookRouter = require('./routes/books')


// Controls and decleard the Views
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts);
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))


// Initalize MongoDB with Node Server
const mongoose = require('mongoose')
mongoose.connect(process.env.DTATBASE_URL, {
    useNewUrlParser: true
})
// Calling and check dataBase connection
const db = mongoose.connection
db.on('error', error => log.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// Final Use For Routers
app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)


// Make server listen to localhost with port 3000
app.listen(process.env.PORT || 3000)