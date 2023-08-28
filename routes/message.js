var express = require('express');
var message =require("../model/messageModel")
var router = express.Router();

/* GET users listing. */
router.post('/',async function(req, res, next) {

    const data= await message.create({
          name:req.body.name,
          mobile:req.body.mobile,
          message:req.body.message,
    })

    res.redirect('/contact');
 
});

module.exports = router;