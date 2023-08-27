
var express = require('express');
var router = express.Router();
var User = require("../model/usermodel");
const jwt=require('jsonwebtoken');

/* GET home page. */
const auth =async function(req,res,next){
    const {token} =req.cookies
 
    if (!token) {
     res.redirect('/login');
    }
    else{
        const decodedData = jwt.verify(token, process.env.TOKENCODE);
        const data=await User.findById(decodedData.id);
        if(!data)
        res.redirect('login')
         else
       next()
    }
 
}
module.exports=auth
