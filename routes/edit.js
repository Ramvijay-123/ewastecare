var express = require('express');
var dashBoard =require("../model/dashBoardModel")
var router = express.Router();

/* GET users listing. */
router.post('/',async function(req, res, next) {
   const {token}=req.cookies;
  console.log(token)
    const data= await dashBoard.create({
      name:req.body.name,
      emailid:req.body.email,
       mobile:req.body.mobile,
       id:token,
    })
  
   res.redirect('/dashBoard');
  
});

module.exports = router;