/* /api/reviews */
/* modules */
const jwt = require('jwt-simple')
const express = require('express')
const router = express.Router()

/* db connection, models */
const db = require('../models')

/* jwt config */
const config = require('../../jwt.config.js')

/* for routes that require authorization */
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
// index: all reviews
router.get('/', function (req, res) {
    db.Review.find()
        .then(reviews => res.json(reviews))
})
// create: post review
router.post('/', authMiddleware, (req, res) => {
    db.Review.create({
        ...req.body,
        userId: req.user.id
    })
        .then(review => res.json(review))
})

// update: put review
router.put('/:id', authMiddleware, async (req, res) => {
    const userReview = await db.Review.findById(req.params.id)
    if (userReview.userId == req.user.id) {
        const newReview = await db.Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(newReview)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

// destroy: delete review
router.delete('/:id', authMiddleware, async (req, res) => {
    const userReview = await db.Review.findById(req.params.id)
    if (userReview.userId == req.user.id) {
        const deletedReview = await db.Review.findByIdAndDelete(req.params.id)
        res.send('You deleted review ' + deletedReview._id)
    } else {
        res.status(401).json({ message: 'Invalid user or token' });
    }
})

/* export to server.js */
module.exports = router