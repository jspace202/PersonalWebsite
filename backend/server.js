const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./config/db');
const uploadRoutes = require('./routes/uploadRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes');
const app = express();

// Configure CORS
app.use(cors({
  origin: 'https://jadenpatel.netlify.app', // Replace with your Netlify doupload
}));

dotenv.config();

app.use(express.json());

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM realestate');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Routes
app.use('/api/uploads', uploadRoutes);
app.use('/api/spotify', spotifyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

