var express = require('express');
var User =require("../model/usermodel")
var router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/* GET users listing. */
router.post('/', async function(req, res, next) {
 
 if(req.body.password==req.body.cpassword){
  const hash= await bcrypt.hash(req.body.cpassword,10);
   const data= await User.create({
      name:req.body.name,
      emailid:req.body.email,
      password:hash
    })
   
    if(data!=''){
      sendToken(data, 200, res);
   
    }
  
    else {
        res.send("Something went worng")
}

 }
 else{
  res.send("Password and conform password do not match")
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

}
module.exports = router;
