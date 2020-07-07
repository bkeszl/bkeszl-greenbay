const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService');
const checkToken = require('../middlewares/checkToken');

router.get('/all', itemService.findAllItems);
router.post('/new', itemService.newItem);
router.get('/find/:id', itemService.findItemById);
router.get('/notsold', itemService.findNotSoldItems);

module.exports = router;
