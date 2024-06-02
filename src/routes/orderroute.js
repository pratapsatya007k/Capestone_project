const router = require("express").Router();
const Order = require("../models/order"); // Import your DataModel
router.post('/orders', async (req, res) => {
    try {
      // Create a new item instance
      const newItem = new Order({
        itemid:req.body.itemid,
        imgsrc: req.body.imgsrc,
        item: req.body.item,
        status:req.body.status,
        username:req.body.username,
        orderDate:req.body.orderDate,
        orderTime:req.body.orderTime,
        DeliveryDate:req.body.DeliveryDate,
        weight:req.body.weight,
        total:req.body.total,
        itemid:req.body.itemid
      });
      // Save the item to the database
      await newItem.save();
      // Send a success response
      res.status(201).send('Item saved successfully');
    } catch (error) {
      // Send an error response
      res.status(500).send('Error saving item');
    }
  });
  router.get('/orders', async (req, res) => {
    const { key, value } = req.query; // Assuming key-value pair is passed as query parameters
    try {
      const regex = new RegExp(`^${value}$`, 'i'); // Case insensitive match with start and end anchors
      const data = await Order.find({ [key]: regex });
      res.json(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });
//   router.delete('/insert', async (req, res) => {
//     const { key, value } = req.body;
  
//     try {
//       const result = await Wish.deleteMany({ [key]: value });
//       res.status(200).json({ message: 'Data deleted successfully', deletedCount: result.deletedCount });
//     } catch (error) {
//       console.error('Error deleting data:', error);
//       res.status(500).json({ error: 'Error deleting data' });
//     }
//   });
  module.exports = router;