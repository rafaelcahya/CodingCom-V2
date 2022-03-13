const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullname :{
        type: String,
        required:true
    },
    username :{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    createAt:{
        type:Date,
        required:true
    },
    updateAt:{
        type:Date,
        required:false
    }


})

const User = mongoose.model("user",UserSchema)
module.exports = User;