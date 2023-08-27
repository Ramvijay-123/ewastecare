const mongoose = require("mongoose");

const sellSchema = new mongoose.Schema({
  nameOfProduct: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },

  img: {
    type: String,
    
  },
  image: {
    data: Buffer,
    contentType: String
  },
  select: {
    type: String,
  },
  price: {
    type: Number,
  },
  discription: {
    type: String,
  },
});
module.exports = mongoose.model("sell", sellSchema);
