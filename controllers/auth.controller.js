const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        }); 


const registerController = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(200).json({ success: false, message: "Input field not found" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(200).json({ success: false, message: "User already registerd" });
        }
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(200).json({ success: true, message: "Register successfully", data: user });
    }
    catch (err) {
        res.status(500).json({ success: true, message: "Register failed" }, err.message);
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password" });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        res.status(200).json({ success: true, message: "Login Successfully", token: token, error: err.message });
    }
    catch (err) {
        res.status(500).json({ success: true, message: "Login failed" }, err.message);
    }
}

const forgotController = async(req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000;
        await user.save();
        const resetUrl = `http://localhost:3000/reset-password/${token}`;
        await transporter.sendMail({
            to: user.email,
            subject: 'Password Reset Link',
            html: `<p>Click here to reset your password: <a href="${resetUrl}">${resetUrl}</a></p>`,
        });
        res.status(200).json({ success: true, message: "Reset link sent to your email", user:resetUrl});
    }
    catch (err) {
        res.status(500).json({ success: true, message: "Forgot failed" }, err.message);
    }
}

const resetController = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired token" });
        }
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();
        res.status(200).json({ success: true, message: "Password reset successful"});
    }   
    catch (err) {
        res.status(500).json({ success: true, message: "Forgot failed" }, err.message);
    }   
}

const logoutController = async(req, res) => {
    try {
        res.status(200).json({ message: 'Logged out successfully' });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {registerController, loginController, forgotController, resetController, logoutController}