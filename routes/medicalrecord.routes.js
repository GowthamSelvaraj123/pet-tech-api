const express = require('express');
const router = express.Router();
const {addMedicalRecord, getRecordsByPet} = require('../controllers/medicalRecord.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', addMedicalRecord);
router.get('/:petId', getRecordsByPet);

module.exports = router;