const express = require('express');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Placeholder for finance routes
router.get('/', authenticate, (req, res) => {
  res.json({
    success: true,
    message: 'Finance module - Coming soon!',
    data: []
  });
});

module.exports = router; 