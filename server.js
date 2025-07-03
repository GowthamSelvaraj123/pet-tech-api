const express = require("express");
const app = express();
require("dotenv").config();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const petRoutes = require('./routes/pet.routes');
const appointmentRoutes = require('./routes/appointemnt.routes');
const medicalRecordRoutes = require('./routes/medicalrecord.routes');
const prescriptionRoutes = require('./routes/prescription.routes');
const reminderRoutes = require('./routes/reminder.routes');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/medical-records', medicalRecordRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/reminders', reminderRoutes);

app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log("test");
});