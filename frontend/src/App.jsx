import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
import AdminUpload from "./Components/AdminUpload";
import SearchForm from "./Components/SearchForm";
import PDFList from "./Components/PDFList";

function App() {
  const [pdfs, setPdfs] = useState([]);

  const handleSearch = async ({ courseName, year, term }) => {
    const query = new URLSearchParams({ courseName, year, term }).toString();
    const response = await fetch(`http://localhost:3000/questions?${query}`);
    const data = await response.json();
    setPdfs(data);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notes" element={<NotePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/group" element={<Group />} />
          <Route path="/board" element={<Board />} />
          <Route path="/upload" element={<AdminUpload />} />
          <Route
            path="/search"
            element={
              <div>
                <SearchForm onSearch={handleSearch} />
                <PDFList pdfs={pdfs} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
