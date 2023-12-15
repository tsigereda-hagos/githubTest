const express = require('express');
const router = express.Router();

// GET /products
router.get('/', (req, res) => {
  res.send('GET /products');
});

// POST /products
router.post('/', (req, res) => {
  res.send('POST /products');
});

module.exports = router;
