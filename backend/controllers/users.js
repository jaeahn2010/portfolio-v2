/* /api/users */

/* modules */
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

/* db connection & models */
const db = require('../models')

/* jwt config */
const config = require('../../jwt.config.js')

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};

/* routes */
// get user's first/last names by token
router.get('/', authMiddleware, (req, res) => {
    db.User.findById(req.user.id)
        .then(user => {
            res.json({ firstName: user.firstName, lastName: user.lastName })
        })
})

// signup
router.post('/signup', (req, res) => {
    db.User.create(req.body)
        .then(user => {
            const token = jwt.encode({ id: user.id }, config.jwtSecret)
            res.json({ token: token })
        })
        .catch(() => {
            res.status(401)
                .json({ message: 'Could not create a new user, try again' })
        })
})

// login
router.post('/login', async (req, res) => {
    const foundUser = await db.User.findOne({ email: req.body.email })
    if (foundUser && foundUser.password === req.body.password) {
        const payload = { id: foundUser.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            token: token,
            email: foundUser.email
        })
    } else {
        res.status(401)
	    .json({ message: 'Could not find user with that email/password' })
    }
})

/* export to server.js */
module.exports = router