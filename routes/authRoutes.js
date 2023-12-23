
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// User login endpoint
router.post('/login', (req, res) => {
  
  // Authenticate user and generate JWT token
  const token = jwt.sign({ id: userId }, 'your-secret-key', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
