// Backend/model/Assesment.js
const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
});

module.exports = mongoose.model('Assessment', AdmissionSchema);