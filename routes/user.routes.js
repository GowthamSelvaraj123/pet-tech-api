const express = require('express');
const router = express.Router();
const  {updateUserProfile, getUserProfile} = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/profile', getUserProfile); //add auth
router.put('/profile', getUserProfile);

module.exports = router;