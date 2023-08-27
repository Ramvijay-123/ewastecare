// Get modal elements
var express = require('express');
var cart =require("../model/cartModel")
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const {token}=req.cookies;
    const data= await cart.find({
        id:token
    });
    const subtotal = data.reduce(
        (acc, item) => acc + item.price,
        0
      );
    res.render('cart',{data:data,subtotal:subtotal})
});

module.exports = router;