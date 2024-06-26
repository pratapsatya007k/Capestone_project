const router = require("express").Router();
const Addcart = require("../models/addcart"); // Import your DataModel

// POST route to insert data
router.post('/cart', async (req, res) => {
  try {
    const newItem = new Addcart({
      itemid: req.body.itemid,
      itemName: req.body.itemName,
      imgsrc: req.body.imgsrc,
      username: req.body.username,
      itemType: req.body.itemType,
      weight: req.body.weight,
      total: req.body.total
    });
    await newItem.save();
    res.status(201).send('Item saved successfully');
  } catch (error) {
    res.status(500).send('Error saving item');
  }
});

// GET route to fetch data
router.get('/cart', async (req, res) => {
  const { key, value } = req.query;
  try {
    const regex = new RegExp(`^${value}$`, 'i'); // Case insensitive match
    const data = await Addcart.find({ [key]: regex });
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE route to delete data
router.delete('/cart', async (req, res) => {
  const { key, value, username } = req.body;
  if (key === 'itemid' && value && username) {
    try {
      const result = await Addcart.findOneAndDelete({ itemid: value, username: username });
      if (result) {
        res.status(200).send('Item deleted');
      } else {
        res.status(404).send('Item not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(400).send('Invalid request');
  }
});

module.exports = router;
