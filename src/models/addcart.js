const mongoose = require("mongoose");

const addcartSchema = new mongoose.Schema({
  itemid: String,
  imgsrc:  String,
  username: String,
  itemName: String,
  itemType:String,
  weight:String,
  total:String,
});


module.exports = mongoose.model("Addcart", addcartSchema);
