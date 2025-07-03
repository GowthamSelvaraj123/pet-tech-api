const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['dog', 'cat', 'rabbit', 'bird', 'other'], default: 'dog' },
  breed: String,
  gender: { type: String, enum: ['male', 'female'] },
  age: Number,
  weight: Number,
  color: String,
  avatar: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  medicalHistory: [
    {
      description: String,
      date: Date,
      vet: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema);
