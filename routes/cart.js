// Get modal elements
var express = require('express');
var cart =require("../model/cartModel")
var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {
    const {token} =req.cookies
    const data= await cart.create({
        nameOfProduct:req.body.nameOfProduct,
         price:req.body.price,
         img:req.body.img,
         id:token,
         discription:req.body.description,
       })

res.send('Cart added successfuly');
  
});

module.exports = router;