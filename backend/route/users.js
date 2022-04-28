const express = require('express')
const router = express.Router()
const crypto = require('crypto');

const userModel = require('../Models/userModel')

router.post("/register", async (req,res)=>{
    const fullname = req.body.fullname
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var pass = crypto.createHash('md5').update(password).digest('hex')
    var isDeleted = "NO"
    if(fullname.length<=0 && username.length<=0 && email.length<=0 && password.length<=0 && confirmpassword.length<=0){
        res.send({message:"All forms have not been filled"})
    }else if (fullname.length <= 0) {
        res.send({ message: "Your fullname is not filled in" })
    } else if (username.length <= 0) {
        res.send({ message: "Your username is not filled in" })
    } else if (username.length >= 20) {
        res.send({ message: "Username must be less than 20 characters" })
    } else if (username.match(/[ ]/) != null) {
        res.send({ message: "Your username cannot contain spaces" })
    } else if (email.length <= 0) {
        res.send({ message: "Your email is not filled in" })
    } else if (email.match(/[@]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (email.match(/[.]/) == null) {
        res.send({ message: "Email is invalid" })
    } else if (password <= 0) {
        res.send({ message: "Your password is not filled in" })
    } else if (password.length < 8) {
        res.send({ message: "Password must be at least 8 characters" })
    } else if (password.length >= 20) {
        res.send({ message: "Password must be less than 20 characters" })
    } else if (password.match(/[A-Z]/) == null) {
        res.send({ message: "Password must contain at least 1 uppercase letter" })
    } else if (password.match(/[a-z]/) == null) {
        res.send({ message: "Password must contain at least 1 lowercase letter" })
    } else if (password.match(/[0-9]/) == null) {
        res.send({ message: "Password must contain at least 1 number" })
    } else if (confirmpassword <= 0) {
        res.send({ message: "Please add your confirm password" })
    } else if (confirmpassword != password) {
        res.send({ message: "Confirm password must be same as password" })
    } else {
    const user = new userModel({fullname: fullname,username :username,email :email,password :pass,createAt : dateTime,updateAt:"", number:"0",isDeleted:isDeleted, status:"Member"})
    try{
        await user.save()
        console.log("Data have been saved")
    }catch(err){
        console.log(err)
    }
}
})

router.get("/login", async (req,res)=>{

})

module.exports = router;