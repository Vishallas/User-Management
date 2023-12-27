const express = require("express");
const { model } = require("mongoose");

const route = express.Router()

route.get('/',(req,res)=>{
    res.render('index');
})

module.exports = route 