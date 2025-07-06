const express = require('express');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Placeholder for HR routes
router.get('/', authenticate, (req, res) => {
  res.json({
    success: true,
    message: 'HR module - Coming soon!',
    data: []
  });
});

module.exports = router; 