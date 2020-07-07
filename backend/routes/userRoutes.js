const express = require('express');
const router = express.Router();
const itemService = require('../services/itemService')
const userService = require('../services/userService')

router.post('/signup', userService.registerUser);
router.get('/login', userService.loginUser);

module.exports = router;