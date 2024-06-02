const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  itemid:String,
  imgsrc: String,
  item:String,
  status:String,
  username:String,
  orderDate:String,
  orderTime:String,
  DeliveryDate:String,
  weight:String,
  total:String,
  itemid:String
});


module.exports = mongoose.model("Order", orderSchema);
