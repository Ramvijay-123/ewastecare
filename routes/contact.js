var express = require('express');
var router = express.Router();
var message=require('../model/messageModel');
/* GET home page. */
router.get('/', async function(req, res, next) {
    const data= await message.find();
    res.render('contact',{ data:data });

});


module.exports = router;
