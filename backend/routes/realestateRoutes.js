const express = require('express');
const dotenv = require('dotenv');

const pool = require('../config/db');

const router = express.Router();

dotenv.config();

router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM realestate');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;