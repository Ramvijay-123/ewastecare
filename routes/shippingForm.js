var express = require('express');
var shipping =require("../model/shippingModel")
var router = express.Router();

/* GET users listing. */
router.post('/',async function(req, res, next) {
    const {token} =req.cookies
    const data= await shipping.create({
 name:req.body.name,
 country:req.body.country,
 state:req.body.state,
 city:req.body.city,
 pincode:req.body.pincode,
 id:token,
    })

    res.redirect('/checkout')
 
});

module.exports = router;