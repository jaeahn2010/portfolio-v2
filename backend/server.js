/* modules */
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

/* db connection, models, seed data */
const db = require('./models');

/* routes in controllers folder */
const reviewsCtrl = require('./controllers/reviews')
const usersCtrl = require('./controllers/users')

/* express app */
const app = express()

/* middleware */
// cross origin allowance
app.use(cors())
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(path.dirname(__dirname), 'frontend', 'dist')))

/* routes */
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') return res.redirect(301, 'https://' + req.headers.host + req.originalUrl)
    next()
})

app.use('/api/reviews', reviewsCtrl)
app.use('/api/users', usersCtrl)
app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'dist', 'index.html'))
})

/* listen on port */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT)
})