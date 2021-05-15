const express = require('express');

const validationMiddleware = require('../middlewares/validation');

const userController = require('../controllers/user.controller');
const userValidation = require('../validations/user');

const router = express.Router();

// get users
router.get('/all', userController.all);
router.post('/create', validationMiddleware(userValidation.create), userController.create);

module.exports = router;
