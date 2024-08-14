const express = require('express');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

dotenv.config();
/*
const uploadsPath = path.join(__dirname, '/backend/uploads');

app.get('/api/file-count', (req, res) => {
  fs.readdir(uploadsPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read directory' });
    }

    // Count files only, excluding directories
    const fileCount = files.filter(file => fs.statSync(path.join(uploadsPath, file)).isFile()).length;

    res.json({ count: fileCount });
  });
});

const folderPath = 'backend/uploads/';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  
  // Count files only, excluding directories
  const fileCount = files.filter(file => fs.statSync(path.join(folderPath, file)).isFile()).length;
  
  console.log('Number of files in uploads/:', fileCount);
});
*/

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
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json(req.file);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));