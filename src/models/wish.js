const mongoose = require("mongoose");

const wishSchema = new mongoose.Schema({
  itemid:String,
  imgsrc: String,
  username: String,
  itemName: String,
  itemType:String,
  weight:String,
  total:String
});


module.exports = mongoose.model("Wish", wishSchema);
