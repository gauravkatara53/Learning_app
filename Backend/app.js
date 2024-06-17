const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    format: async (req, file) => file.mimetype.split("/")[1], // use original file format
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Question Schema
const QuestionSchema = new mongoose.Schema({
  courseName: String,
  year: Number,
  term: String,
  semester: Number,
  pdfUrl: String,
});

const Question = mongoose.model("Question", QuestionSchema);

// Notes Schema
const NotesSchema = new mongoose.Schema({
  courseName: String,
  term: String,
  semester: Number,
  pdfUrl: String,
});

const Notes = mongoose.model("Notes", NotesSchema);

// Route for uploading questions
app.post("/upload/question", upload.single("pdf"), async (req, res) => {
  try {
    const { courseName, year, term, semester } = req.body;
    const pdfUrl = req.file.path; // or req.file.url if using Cloudinary's URL
    const question = new Question({ courseName, year, term, semester, pdfUrl });
    await question.save();
    res.json(question);
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// Route for uploading notes
app.post("/upload/note", upload.single("pdf"), async (req, res) => {
  try {
    const { courseName, term, semester } = req.body;
    const pdfUrl = req.file.path; // or req.file.url if using Cloudinary's URL
    const note = new Notes({ courseName, term, semester, pdfUrl });
    await note.save();
    res.json(note);
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// Route to fetch questions
app.get("/questions", async (req, res) => {
  try {
    const { courseName, year, term, semester } = req.query;
    let query = {};
    if (courseName) query.courseName = { $regex: new RegExp(courseName, "i") };
    if (year) query.year = year;
    if (term) query.term = term;
    if (semester) query.semester = semester;

    const questions = await Question.find(query);
    res.json(questions);
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// Route to fetch notes
app.get("/notes", async (req, res) => {
  try {
    const { courseName, term, semester } = req.query;
    let query = {};
    if (courseName) query.courseName = { $regex: new RegExp(courseName, "i") };
    if (term) query.term = term;
    if (semester) query.semester = semester;

    const notes = await Notes.find(query);
    res.json(notes);
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
