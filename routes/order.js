// Get modal elements
var express = require('express');
var cart =require("../model/cartModel")
var router = express.Router();
var order =require('../model/order')
/* GET users listing. */
router.post('/', async function(req, res, next) {
    const {token}=req.cookies;
    const data= await cart.find({
        id:token
    });
 await order.create({
   data
 })
 res.redirect('/conform')
});

module.exports = router;