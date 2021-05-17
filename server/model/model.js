const mongoose = require("mongoose");

var schme = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    gender: String,
    status: String,
});

const userDB = mongoose.model("userDB", schme);

module.exports = userDB;