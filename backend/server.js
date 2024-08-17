const express = require('express');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const qs = require('qs');

dotenv.config();

const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret
const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/uploads/');
  },
  filename: function (req, file, cb) {
    // Get the original file extension
    const ext = path.extname(file.originalname);

    // Create a filename with original name, current date, and time
    const uniqueName = `${path.basename(file.originalname, ext)}_${Date.now()}${ext}`;

    cb(null, uniqueName);
  },
});

const upload = multer({ storage });


//Routes
app.get('/api/filecount', (req, res) => {
  const uploadsPath = path.join(__dirname, 'uploads/');

  fs.readdir(uploadsPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read directory' });
    }

    // Count files only, excluding directories
    const fileCount = files.filter(file => fs.statSync(path.join(uploadsPath, file)).isFile()).length;
    res.json({ count: fileCount });
  });
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/auth', async (req, res) => {
  try{
    //make post request to SPOTIFY API for access token, sending relavent info
    const token_url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({'grant_type':'client_credentials'});

    const response = await axios.post(token_url, data, {
      headers: { 
        'Authorization': `Basic ${auth_token}`,
        'Content-Type': 'application/x-www-form-urlencoded' 
      }
    })
    //return access token
    // Send the access token in the response
    res.json({ access_token: response.data.access_token }) 
  }catch(error){
    res.status(500).json({ error: 'Failed to fetch access token' });
    console.log(error);
  }
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json(req.file);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

