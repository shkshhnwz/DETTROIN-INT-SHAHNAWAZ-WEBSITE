const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  academicSession: {
    type: String,
    required: true,
    trim: true
  },
  board: {
    type: String,
    required: true,
    trim: true
  },
  scholarType: {
    type: String,
    required: true,
    trim: true
  },
  parentName: {
    type: String,
    required: true,
    trim: true
  },
  parentEmail: {
    type: String,
    required: true,
    trim: true
  },
  parentMobile: {
    type: String,
    required: true,
    trim: true
  },
  grade: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    required: true,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Admission', AdmissionSchema);