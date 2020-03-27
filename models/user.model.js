const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    uiv: {
        type: String,
        required: true
    }
}, {
    timestamp: true
});

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;