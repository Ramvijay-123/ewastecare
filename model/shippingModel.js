const mongoose=require('mongoose');
const shippingSchema=mongoose.Schema({
    name:String,
    country:String,
    state:String,
    city:String,
    pincode:Number,
    id:String,
})
module.exports=mongoose.model("shipping",shippingSchema)