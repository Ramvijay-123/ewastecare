const mongoose=require('mongoose');
const messageSchema=mongoose.Schema({
    name:String,
  mobile:String,
  message:String
})
module.exports=mongoose.model("message",messageSchema)