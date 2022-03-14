const express = require('express');
//const { default: mongoose } = require('mongoose');
const app = express()

const userRoute = require('./route/users')
app.use("/",userRoute)

app.listen(3001,()=>{
    console.log("Server running on port 3001....")
})