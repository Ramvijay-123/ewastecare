// Get modal elements
var express = require('express');
var cart =require("../model/cartModel")
var router = express.Router();
var shipping =require("../model/shippingModel")
/* GET users listing. */
router.get('/', async function(req, res, next) {
    const {token}=req.cookies;
    const address=await shipping.findOne({id:token}) ;
const data= await cart.find( {id:token});
const subtotal = data.reduce(
    (acc, item) => acc + item.price,
    0
  );

const add=address.city+","+address.pincode+","+address.state+","+address.country;
res.render('checkOut',{subtotal:subtotal,add:add})
  
});

module.exports = router;