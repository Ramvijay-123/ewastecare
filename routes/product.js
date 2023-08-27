const express=require('express');
const router=express.Router();
const sell =require('../model/sellModel')
router.get('/',async(req,res,next)=>{
    const data=await sell.find({select:"sell"});
 
res.render('product',{data:data})
 
})
module.exports=router