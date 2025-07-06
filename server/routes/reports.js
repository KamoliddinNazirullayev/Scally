const express = require('express');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Placeholder for reports routes
router.get('/', authenticate, (req, res) => {
  res.json({
    success: true,
    message: 'Reports module - Coming soon!',
    data: []
  });
});

module.exports = router; 