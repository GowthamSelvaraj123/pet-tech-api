const MedicalRecord = require("../models/medicalRecord.model")

const addMedicalRecord = async(req, res) => {
    try{
        const record = new MedicalRecord(req.body);
        await record.save();
        res.status(200).json({success:true, message:"Created Medical Record successfully", data:record});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Create appointment failed", data:err.message});
    }
}
const getRecordsByPet = async(req, res) => {
    try{
        const records = await MedicalRecord.find({ pet: req.params.petId });
        res.status(200).json({success:true, message:"Get Records successfully", data:records});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Get records failed", data:err.message});
    }
}

module.exports = {addMedicalRecord, getRecordsByPet};
