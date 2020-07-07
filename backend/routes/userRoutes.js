const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService')
const userService = require('../services/userService')

router.post('/signup', userService.registerUser);

module.exports = router;