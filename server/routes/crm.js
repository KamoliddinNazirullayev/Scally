const express = require('express');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Placeholder for CRM routes
router.get('/', authenticate, (req, res) => {
  res.json({
    success: true,
    message: 'CRM module - Coming soon!',
    data: []
  });
});

module.exports = router; 