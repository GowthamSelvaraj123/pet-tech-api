const Prescription = require('../models/prescription.model');

const createPrescription = async(req, res) => {
    try{
        const prescription = new Prescription(req.body);
        await prescription.save();
        res.status(200).json({success:true, message:"Created prescription successfully", data:user});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Prescription failed", data:err.message});
    }
}

const getPrescriptionsByPet = async(req, res) => {
    try{
        const prescriptions = await Prescription.find({ pet: req.params.petId });
        res.status(200).json({success:true, message:"Get Prescription succssfully", data:user});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Prescription failed", data:err.message});
    }
}

module.exports = {createPrescription, getPrescriptionsByPet};