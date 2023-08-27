var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/',async function(req, res, next) {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
   
   res.render('login',{message:'logout successfully'});
  
});

module.exports = router;
