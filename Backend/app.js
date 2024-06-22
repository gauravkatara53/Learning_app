const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies

// Initialize Firebase with configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

// Configure Multer for handling file uploads, storing files in memory
const upload = multer({ storage: multer.memoryStorage() });

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define Question schema and model
const QuestionSchema = new mongoose.Schema({
  courseName: String,
  year: Number,
  term: String,
  semester: Number,
  pdfUrl: String,
});

const Question = mongoose.model("Question", QuestionSchema);

// Define Notes schema and model
const NotesSchema = new mongoose.Schema({
  courseName: String,
  term: String,
  semester: Number,
  pdfUrl: String,
});

const Notes = mongoose.model("Notes", NotesSchema);

// Function to upload a file to Firebase Storage and return its download URL
const uploadFileToFirebase = async (file) => {
  const storageRef = ref(storage, `uploads/${Date.now()}-${file.originalname}`);
  const snapshot = await uploadBytes(storageRef, file.buffer);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};

// Route for uploading questions
app.post("/upload/question", upload.single("pdf"), async (req, res) => {
  try {
    const { courseName, year, term, semester } = req.body;
    const pdfUrl = await uploadFileToFirebase(req.file); // Upload to Firebase and get URL
    const question = new Question({ courseName, year, term, semester, pdfUrl });
    await question.save();
    res.json(question); // Respond with the saved question document
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// Route for uploading notes
app.post("/upload/note", upload.single("pdf"), async (req, res) => {
  try {
    const { courseName, term, semester } = req.body;
    const pdfUrl = await uploadFileToFirebase(req.file); // Upload to Firebase and get URL
    const note = new Notes({ courseName, term, semester, pdfUrl });
    await note.save();
    res.json(note); // Respond with the saved note document
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// Route to fetch questions based on query parameters
app.get("/questions", async (req, res) => {
  try {
    const { courseName, year, term, semester } = req.query;
    let query = {};
    if (courseName) query.courseName = { $regex: new RegExp(courseName, "i") };
    if (year) query.year = year;
    if (term) query.term = term;
    if (semester) query.semester = semester;

    const questions = await Question.find(query); // Find questions matching the query
    res.json(questions); // Respond with the found questions
  } catch (err) {
    console.error("Error fetching questions:", err);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
});

// Route to fetch notes based on query parameters
app.get("/notes", async (req, res) => {
  try {
    const { courseName, term, semester } = req.query;
    let query = {};
    if (courseName) query.courseName = { $regex: new RegExp(courseName, "i") };
    if (term) query.term = term;
    if (semester) query.semester = semester;

    const notes = await Notes.find(query); // Find notes matching the query
    res.json(notes); // Respond with the found notes
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
