/* modules */
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')

/* db connection, models, seed data */
const db = require('./models');

/* routes in controllers folder */
const reviewsCtrl = require('./controllers/reviews')
const usersCtrl = require('./controllers/users')

/* express app */
const app = express();

/* middleware */
// cross origin allowance
app.use(cors())
// body parser - used for POST/PUT/PATCH routes:
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

/* routes */
app.use('/api/reviews', reviewsCtrl)
app.use('/api/users', usersCtrl)

/* listen on port */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});