const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  vet: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: String,
  diagnosis: String,
  treatment: String,
  date: { type: Date, default: Date.now },
  documents: [String]
}, { timestamps: true });

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
