const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    }
})
const admin = mongoose.model("admin", adminSchema);
module.exports = { admin }