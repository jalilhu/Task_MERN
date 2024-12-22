const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    email: {
        type: String,
        required: [true,"Please input your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "please provide a password"]
    },

}, {
    timestamps: true,
})


module.exports = mongoose.model('User', userSchema)