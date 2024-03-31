const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: {type: String, unique: true, required: true},
        password: {type: String, minlength: 8, required: true},
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
    },
);

// export to models/index.js
module.exports = mongoose.model('User', userSchema);