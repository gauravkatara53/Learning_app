import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import NotePage from "./Pages/NotePage";
import Courses from "./Pages/ Courses";
import Attendance from "./Pages/Attendance";
import Group from "./Pages/ Group";
import Dashboard from "./Pages/Dashboard";
import Board from "./Pages/Board";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import AdminUpload from "./Components/PYQ/AdminUpload";
import SearchForm from "./Components/PYQ/SearchForm";
import PDFList from "./Components/PYQ/PDFList";
import SearchNotesForm from "./Components/NOTES/SearchNotesForm";
import NotesList from "./Components/NOTES/NotesList";
import AdminUploadNotes from "./Components/NOTES/AdminUploadNotes";
import Footer from "./Components/Footer";
import Community from "./Pages/Community";

function App() {
  const [pdfs, setPdfs] = useState([]);
  const [notes, setNotes] = useState([]);

  const handleSearchPdfs = async ({ courseName, year, term, semester }) => {
    const query = new URLSearchParams({
      courseName,
      year,
      term,
      semester,
    }).toString();
    const response = await fetch(`http://localhost:3000/questions?${query}`);
    const data = await response.json();
    setPdfs(data);
  };

  const handleSearchNotes = async ({ courseName, term, semester }) => {
    const query = new URLSearchParams({
      courseName,
      term,
      semester,
    }).toString();
    const response = await fetch(`http://localhost:3000/notes?${query}`);
    const data = await response.json();
    setNotes(data);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/notes" element={<NotePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/group" element={<Group />} />
          <Route path="/board" element={<Board />} />
          <Route path="/upload/pyq" element={<AdminUpload />} />
          <Route
            path="/search/pyq"
            element={
              <div>
                <SearchForm onSearch={handleSearchPdfs} />
                <PDFList pdfs={pdfs} />
              </div>
            }
          />
          <Route path="/upload/notes" element={<AdminUploadNotes />} />
          <Route
            path="/search/notes"
            element={
              <div>
                <SearchNotesForm onSearch={handleSearchNotes} />
                <NotesList notes={notes} />
              </div>
            }
          />
          <Route path="/community" element={<Community />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
