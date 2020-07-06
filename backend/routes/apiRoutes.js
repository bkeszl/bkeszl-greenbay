const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/all' , (req, res) => {
  db.Item.findAll().then(items => res.send(items));
});

module.exports = router;