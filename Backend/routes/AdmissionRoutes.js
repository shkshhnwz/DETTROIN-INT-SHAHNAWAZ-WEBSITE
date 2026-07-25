const express = require('express');
const router = express.Router();
const admissionController = require('../controller/AdmissionController');

// POST /api/admission/submit
router.post('/submit', admissionController.submitAdmissionForm);

module.exports = router;