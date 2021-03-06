const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    fbId:String
});


module.exports = mongoose.model("user", userSchema);
