const express = require('express');
const router = express.Router();
const {createPet, getPetsByOwner} = require('../controllers/pet.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/', createPet); //auth
router.get('/', getPetsByOwner); //auth

module.exports = router;
