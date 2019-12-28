const express = require('express');
const app = express();
const multer = require('multer');

// Multer Storage

const multerStorage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path.join(__dirname, 'my_upload'));
  },
  filename: function(req, file, callback) {
    callback(null, Date.now() + '_' + file.originalname);
  }
});

// For Single File upload
const multerSingleUpload = multer({storage: multerStorage});

// Route for single file uoload
app.post("/singleFile", multerSingleUpload.single('singleImage'), function(req, res) {
  const file = req.file;
  if (!file)
    return res.end("Please choose file to upload");
  req.app.locals.uploadStatus = true;
  res.redirect('/');
});