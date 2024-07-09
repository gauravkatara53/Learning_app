const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./user");
const multer = require("multer");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} = require("firebase/storage");

require("dotenv").config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase
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

// Configure Multer Storage
const upload = multer({ storage: multer.memoryStorage() });

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Payment Schema
const PaymentSchema = new mongoose.Schema({
  username: String,
  email: String,
  courseName: String,
  amount: Number,
  paymentId: String,
});

const Payment = mongoose.model("Payment", PaymentSchema);

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

// Contact Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", ContactSchema);

// Function to upload file to Firebase Storage
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
    const pdfUrl = await uploadFileToFirebase(req.file); // Upload to Firebase and get URL
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

// Route to handle payment data
app.post("/api/payment", async (req, res) => {
  try {
    const { username, email, courseName, amount, paymentId } = req.body;
    const payment = new Payment({
      username,
      email,
      courseName,
      amount,
      paymentId,
    });
    await payment.save();
    res.json(payment);
  } catch (err) {
    console.error("Error saving payment data:", err);
    res.status(500).json({ error: "Failed to save payment data" });
  }
});

// Route to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res
      .status(201)
      .json({ message: "Contact form submitted successfully", contact });
  } catch (err) {
    console.error("Error saving contact form data:", err);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

// Use user routes
app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
