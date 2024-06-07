const express = require('express');
const router = express.Router();
const multer = require('multer');
const Note = require('../models/note');

// Set up storage engine for Multer
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route to handle adding a new note
router.post('/add', upload.single('pdf'), async (req, res) => {
    const { title, content } = req.body;
    const pdfPath = req.file ? req.file.path : null;

    const newNote = new Note({
        title,
        content,
        pdfPath
    });

    try {
        await newNote.save();
        res.status(201).json({ message: 'Note added successfully', note: newNote });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add note', error });
    }
});

module.exports = router;
