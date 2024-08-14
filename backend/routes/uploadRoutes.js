const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the destination directory
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Create a unique filename
  }
});

const upload = multer({ storage: storage });

// Upload route
router.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.json({ filePath: `/uploads/${req.file.filename}` });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
