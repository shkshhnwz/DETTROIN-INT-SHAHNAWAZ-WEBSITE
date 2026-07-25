const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const contactRoutes = require('./routes/contactRoutes');
const admissionRoutes = require('./routes/AdmissionRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admission', admissionRoutes);

// Simple Health Check
app.get('/health', (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Database connection & Server start
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("CRITICAL ERROR: The variable of MONGO_URI is not defined in .env ");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB Atlas. Exiting. Error:", err.message);
    process.exit(1);
  });
