const express = require('express');
const { authenticate } = require('../middleware/auth');

const router = express.Router();

// Placeholder for inventory routes
router.get('/', authenticate, (req, res) => {
  res.json({
    success: true,
    message: 'Inventory module - Coming soon!',
    data: []
  });
});

module.exports = router; 