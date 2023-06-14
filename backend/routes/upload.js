const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname);
    }
})
const upload = multer(storage);

router.post('/', upload.single('picture'), (req, res) => {
    res.json({ file: req.file });
});
