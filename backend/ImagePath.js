const multer = require('multer');

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });
// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Handle image uploads
app.post('/api/upload', upload.single('uploadFile'), (req, res) => {
  if (req.file) {
    // File uploaded successfully
    res.json({ message: 'File uploaded successfully', filePath: req.file.path });
  } else {
    // No file selected
    res.status(400).json({ error: 'No file selected' });
  }
});
  
module.exports = {
    generateFile,
}