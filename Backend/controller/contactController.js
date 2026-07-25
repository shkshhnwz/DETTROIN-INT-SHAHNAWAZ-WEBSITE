const Contact = require('../model/Contact');


exports.submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, countryOfResidence, subject, message } = req.body;

   
    if (!firstName || !lastName || !email || !mobileNumber || !subject || !message) {
      return res.status(400).json({ success: false, message: 'Please fill all required fields' });
    }

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      mobileNumber,
      countryOfResidence,
      subject,
      message
    });

    await newContact.save();
    res.status(201).json({ success: true, message: 'Your enquiry has been submitted successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Server error, please try again later.' });
  }
};
