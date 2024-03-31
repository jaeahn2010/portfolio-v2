const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        comment: {type: String, required: true},
        rating: {type: Number, required: true, min: 1, max: 5},
        userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    },
    { timestamps: true }
);

// export to models/index.js
module.exports = mongoose.model('Review', reviewSchema);