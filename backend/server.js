const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const uploadRoutes = require('./routes/uploadRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes');
const realestateRoutes = require('./routes/realestateRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const app = express();

// Configure CORS
app.use(cors({
  origin: 'https://jadenpatel.netlify.app', // Replace with your Netlify doupload
}));

dotenv.config();

app.use(express.json());

//Routes
app.use('/api/backendConnection', (req, res) => {
  console.log('backend check success');
  res.send('active');
});

app.use('/api/properties', propertyRoutes);
app.use('/api/realestatedata', realestateRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/spotify', spotifyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));