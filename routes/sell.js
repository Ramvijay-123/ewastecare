var express = require('express');
var sell =require("../model/sellModel")
var router = express.Router();
const fs=require('fs')
var path = require('path');
/* GET users listing. */
const repath=path.join(__dirname ,'..');

router.post('/',async function(req, res, next) {
   const imgType = req.file.mimetype;
    const data= await sell.create({
      nameOfProduct:req.body.nameOfProduct,
       price:req.body.price,
       img:req.file.filename,
       discription:req.body.description,
       select:req.body.select,
       image:{
         data:fs.readFileSync(path.join(repath,'/public/img',req.file.filename)),
         contentType: imgType
    }
    })

    res.redirect('product')
 
});

module.exports = router;