const Reminder = require("../models/reminder.model");

const createReminder = async(req, res) => {
    try{
         const reminder = new Reminder({...req.body, user:req.user});
         await reminder.save()
         res.status(200).json({success:true, message:"Created reminder successfully", data:reminder});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Reminder failed", data:err.message});
    }
}

const getUserReminders = async(req, res) => {
    try{
        const reminders = await Reminder.find({ user: req.user });
        res.status(200).json({success:true, message:"Get reminders successfully", data:reminders});
    }
    catch(err)
    {
        res.status(500).json({success:true, message:"Reminder fetch failed", data:err.message});
    }
}

module.exports = {createReminder, getUserReminders};
