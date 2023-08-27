const mongoose = require("mongoose");
const validator = require("validator");
const dashBoardSchema = new mongoose.Schema({
  name: {
    type: String,
    name: "xxxxx",
    required: [true, "Please Enter Your Name"],
  },
  emailid: {
    type: String,
    default: "4320184318@gmail.com",
    required: [true, "Please Enter Your Email"],
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  id:String,
  mobile: {
    type: String,
  },
  Address: {
    type: String,
  },
  ListOfItemSell: [
    {
      img: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
  ListOfItemBuy: {},
});
module.exports = mongoose.model("dashBoard", dashBoardSchema);
