const express = require('express');
const router = express.Router();
const {createPrescription, getPrescriptionsByPet} = require('../controllers/prescription.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', createPrescription);
router.get('/:petId', getPrescriptionsByPet);

module.exports = router;