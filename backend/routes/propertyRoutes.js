const express = require('express');
const dotenv = require('dotenv');

const pool = require('../config/db');

const router = express.Router();

dotenv.config();

router.get('/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

router.get('/property', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM property');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

router.get('/unit', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM unit');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;