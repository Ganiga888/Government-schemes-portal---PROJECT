const express = require('express');
const cors = require('cors');
const app = express();

const schemeRoutes = require('./routes/schemes');
const authRoutes = require('./routes/auth'); // ✅ Add this line

app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/schemes', schemeRoutes);
app.use('/api/auth', authRoutes); // ✅ Add this line

module.exports = app;
