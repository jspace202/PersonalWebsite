const express = require('express');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

dotenv.config();

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

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.json(req.file);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));