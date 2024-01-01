const mongoose = require("mongoose");

var scheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gender: String,
    status: String
})

const UserDB = mongoose.model('userdb', scheme);

module.exports = UserDB;