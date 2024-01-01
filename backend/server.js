const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('./lib/passportConfig')
const path = require('path');
// const serverside = require('../frontend/build')

const authRoute = require('./routes/auth')

require('dotenv').config()


const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.static('public'))

app.use(bodyParser.json())

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'SUPERSECRET',
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 86400000}
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})



app.use('/', authRoute)
// Serve static files from the React build folder

// Catch-all route for React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(PORT, () => {
    console.log(`The Flamingo is listening on ${PORT}`)
})

mongoose.connect(process.env.DB_CONNECTION,
).then(() => {
console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
console.log('An error occurred', err)
})

