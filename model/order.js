const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  nameOfProduct: {
    type: String,
 
  },

  img: {
    type: String,
    
  },

  address:String,
  price: {
    type: Number,
  },

});
module.exports = mongoose.model("order", orderSchema);