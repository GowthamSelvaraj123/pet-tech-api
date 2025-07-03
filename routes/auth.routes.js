const express = require('express');
const router = express.Router();
const {registerController, loginController, forgotController, resetController, logoutController} = require('../controllers/auth.controller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/forgot-password', forgotController);
router.post('/reset-password/:token', resetController);
router.post('/logout', logoutController);

module.exports = router;
