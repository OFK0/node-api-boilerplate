const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();

// get users
router.get('/all', userController.all);

module.exports = router;