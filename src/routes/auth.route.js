const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login);

// send email verification
router.post('/send-verification-email', authController.sendVerificationEmail);

// verify email verification
router.post('/email-verification', authController.emailVerification);

// refresh token 
router.post('/refresh-tokens', authController.refreshTokens);

// forgot password
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;