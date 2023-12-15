const express = require('express');
const router = express.Router();

// GET /users
router.get('/', (req, res) => {
  res.send('GET /users');
});

// POST /users
router.post('/', (req, res) => {
  res.send('POST /users');
});

module.exports = router;
