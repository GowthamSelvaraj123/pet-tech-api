const express = require('express');
const router = express.Router();
const  {createReminder, getUserReminders} = require('../controllers/reminder.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', createReminder);
router.get('/', getUserReminders);

module.exports = router;