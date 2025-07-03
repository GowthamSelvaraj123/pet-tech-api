const Appointment = require("../models/appointment.model")

const createAppointment = async(req, res) => {
    try{
        const appointment = new Appointment({ ...req.body, owner: req.user });
        await appointment.save();
        res.status(200).json({success:true, message:"Created appointment successfully", data:appointment});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Create appointment failed", data:err.message});
    }
}

const getAppoinmentsByUser = async(req, res) => {
    try{
        const appointments = await Appointment.find({ owner: req.user }).populate('pet vet');
        res.status(200).json({success:true, message:"Get appointments successfully", data:appointments});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Get appointments failed", data:err.message});
    }
}

module.exports = {createAppointment, getAppoinmentsByUser};
