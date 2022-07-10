const mongoose = require('mongoose');

const aadharSchema = new mongoose.Schema({
    aadharNumber:{
        type: String,
        required: true,
        minlength: 10,
        unique: true
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
    },
    homeAddress:{
        type: String,
        required: true,
    }
})

const aadhar = mongoose.model("aadhar", aadharSchema)
module.exports = { aadhar };