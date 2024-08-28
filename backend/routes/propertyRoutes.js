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

  // Route to add a new user
router.post('/adduser', async (req, res) => {
  const { name, email, password } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route to add a new property
router.post('/addproperty', async (req, res) => {
  const { user_id, propertyType, propertyName, address } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO property (user_id, propertyType, propertyName, address) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_id, propertyType, propertyName, address]
    );

    res.json(result.rows[0]); // Send back the newly created property
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/addunit', async (req, res) => {
  const { property_id, rent, leaseStart, leaseEnd, unitNumber } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO unit (property_id, rent, leaseStart, leaseEnd, unitNumber) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [property_id, rent, leaseStart, leaseEnd, unitNumber]
    );

    res.json(result.rows[0]); // Send back the newly created unit
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;