const express = require('express')
const router = express.Router()

const userModel = require('../Models/userModel')

router.get("/",async (req,res)=>{
    var fullname = "William Kosasie"
    var username ="william1"
    var email = "william@gmail.com"
    var password = "william1"
    var confirmpassword = "william1"
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    var createAt = dateTime
    var updateAt = ""
    const user = new userModel({fullname: "William Kosasie",username :"william1",email : "william@gmail.com",password : "william1",createAt : dateTime,updateAt:"", number:"087654321234"})
    try{
        await user.insert()
        console.log("Data have been saved")
    }catch(err){
        console.log(err)
    }
    console.log(dateTime)
})

module.exports = router;