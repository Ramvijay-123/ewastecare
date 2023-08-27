var express = require('express');
const jwt=require('jsonwebtoken');
var cart =require("../model/cartModel")
const dashBoard = require('../model/dashBoardModel');
var router = express.Router();
router.get('/', async(req,res)=>{
      const { token } = req.cookies;
      
      const cartItem=await cart.find({id:token});
      const subtotal = cartItem.reduce(
            (acc, item) => acc + item.price,
            0
          );
       
      const data=await dashBoard.findOne({id:token});

      if(!data) res.render('editProfile');
      else
      res.render('dashBoard2', { data:data,cartItem:cartItem,subtotal:subtotal});
})
module.exports=router