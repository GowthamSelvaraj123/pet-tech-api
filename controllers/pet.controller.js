const Pet = require('../models/pet.model');

const createPet = async(req, res) => {
    try{
        const pet = await Pet({...req.body, owner:req.user});
        await pet.save();
        res.status(200).json({success:true, message:"Created pet successfully", data:user});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Create failed", data:err.message});
    }
}

const getPetsByOwner = async(req, res) => {
    try
    {
        const pets = await Pet.find({owner: req.user});
        res.status(200).json({success:true, message:"Get pets owner list", data:user});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Get pets owner list failed", data:err.message});
    }
}

module.exports = {createPet, getPetsByOwner}