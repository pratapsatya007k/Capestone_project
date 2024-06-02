const router = require("express").Router();
const Wish = require("../models/wish"); // Import your DataModel

// POST route to insert data
router.post('/insert', async (req, res) => {
  try {
    const newItem = new Wish({
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
    res.status(500).send(error.message);
  }
});

// GET route to fetch data
router.get('/fetch', async (req, res) => { // Changed route path to /fetch
  const { key, value } = req.query;
  try {
    const regex = new RegExp(`^${value}$`, 'i');
    const data = await Wish.find({ [key]: regex }); // Corrected to use `Wish`
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE route to delete data
router.delete('/delete', async (req, res) => { // Changed route path to /delete
  const { key, value, username } = req.body;
  if (key === 'itemid' && value && username) {
    try {
      const result = await Wish.findOneAndDelete({ itemid: value, username: username });
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
