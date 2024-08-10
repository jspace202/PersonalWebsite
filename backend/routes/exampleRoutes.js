const express = require('express');
const router = express.Router();
const ExampleModel = require('../models/ExampleModel');

// Define routes here
router.get('/', (req, res) => {
  res.send('Example route');
});

module.exports = router;