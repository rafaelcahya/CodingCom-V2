const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()

const db = mongoose.connect("mongodb+srv://williamkosasie:wil4526879@codingcomv2.m80xs.mongodb.net/CodingCom?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

module.exports = db