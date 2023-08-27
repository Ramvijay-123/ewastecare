const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  nameOfProduct: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  id:String,
  img: {
    type: String,
  },
  price: {
    type: Number,
  },
  discription: {
    type: String,
  },
});
module.exports = mongoose.model("cart",cartSchema);