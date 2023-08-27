const mongoose =require('mongoose')
const validator = require("validator");
const userSchema=new mongoose.Schema({
          name:{
            type:String ,
            required: [true, "Please Enter Your Name"],
          },
          emailid:{
            type:String,
            required: [true, "Please Enter Your Email"],
            validate: [validator.isEmail, "Please Enter a valid Email"],
          },
          password:{
            type:String ,
          }
})
module.exports=mongoose.model("User",userSchema)