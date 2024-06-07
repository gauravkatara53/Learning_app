const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    pdfPath: { type: String }
});

module.exports = mongoose.model('Note', noteSchema);
