const Admission = require('../model/Admission');

// Submit an admission enquiry
exports.submitAdmissionForm = async (req, res) => {
  try {
    const {
      academicSession,
      board,
      scholarType,
      parentName,
      parentEmail,
      parentMobile,
      grade,
      gender,
      dateOfBirth
    } = req.body;

    // Validation
    if (
      !academicSession ||
      !board ||
      !scholarType ||
      !parentName ||
      !parentEmail ||
      !parentMobile ||
      !grade ||
      !gender ||
      !dateOfBirth
    ) {
      return res.status(400).json({ success: false, message: 'Please fill all required fields' });
    }

    const newAdmission = new Admission({
      academicSession,
      board,
      scholarType,
      parentName,
      parentEmail,
      parentMobile,
      grade,
      gender,
      dateOfBirth
    });

    await newAdmission.save();
    res.status(201).json({ success: true, message: 'Your admission enquiry has been submitted successfully!' });
  } catch (error) {
    console.error('Error submitting admission enquiry:', error);
    res.status(500).json({ success: false, message: 'Server error, please try again later.' });
  }
};
