const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const router = express.Router();

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

router.get('/', (req, res) => {
    res.send('Hello Worldss');
});

router.get('/filecount', (req, res) => {
    const uploadsPath = path.join(__dirname, '../uploads/');

    fs.readdir(uploadsPath, (err, files) => {
      if (err) {
        return res.status(500).json({ error: 'Unable to read directory' });
      }
  
      // Count files only, excluding directories
      const fileCount = files.filter(file => fs.statSync(path.join(uploadsPath, file)).isFile()).length;
      res.json({ count: fileCount });
    });
});

router.post('/upload', upload.single('file'), (req, res) => {
    res.json(req.file);
});

module.exports = router;

