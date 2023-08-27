var express = require("express");
var User = require("../model/usermodel");
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* GET users listing. */
router.post("/", async function (req, res, next) {
   
  const data = await User.findOne({
    emailid: req.body.email,
  });
 
  if (data) {
    
    const isCorrectpassword = await bcrypt.compare(
      req.body.password,
      data.password
    );
  
    if(isCorrectpassword){
      sendToken(data, 200, res);
    }
    else{
      res.render('login',{message:'Email password not correct'});
    }
  }
   else {
  res.render('login',{message:'Email not found'})
  }
});

const sendToken = (data, statusCode, res) => {
 
  const token = jwt.sign( {id: data._id },process.env.TOKENCODE, {
    expiresIn: "5d",
  });

  // options for cookie
  const options = {
    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options);
  res.redirect("/product");

};

module.exports = router;

