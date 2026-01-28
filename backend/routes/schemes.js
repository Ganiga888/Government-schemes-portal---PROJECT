// backend/routes/schemes.js
const express = require('express');
const router = express.Router();
const { getSchemes, getSchemeById } = require('../controllers/schemeController');

// Get all schemes
router.get('/', getSchemes);

// Get single scheme by ID
router.get('/:id', getSchemeById);

module.exports = router;


