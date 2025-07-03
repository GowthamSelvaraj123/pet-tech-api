const express = require('express');
const router = express.Router();
const  {createAppointment, getAppoinmentsByUser} = require('../controllers/appointment.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', createAppointment);
router.get('/', getAppoinmentsByUser);

module.exports = router;
