const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const migrationPageRoutes = require('./routes/migrationPageRoutes');
const countriesPageRoutes = require('./routes/countriesPageRoutes');
const contactRoutes = require('./routes/contactRoutes');
const assesmentRoutes = require('./routes/assesmentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const Categoryroute = require('./routes/categoryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/pages', migrationPageRoutes);
app.use('/api/countries-pages', countriesPageRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/assessment', assesmentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/payment', paymentRoutes);
app.use("/api/success", Categoryroute);

// Simple Health Check
app.get('/health', (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Database connection & Server start
const MONGO_URI = process.env.MONGODB_URI;

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
