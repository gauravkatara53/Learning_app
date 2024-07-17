import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import NotePage from "./Pages/NotePage";
import Courses from "./Pages/Courses/ Courses";
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
import ComingSoon from "./Components/credit/ComingSoon";
import ContactForm from "./Components/ContactForm";
import Profile from "./Components/Profile";
import CreditPage from "./Components/credit/CreditPage";
import Alert from "./Components/Alert";
import DSA from "./Pages/Courses/DSA";
import AI from "./Pages/Courses/AI";
import Web from "./Pages/Courses/Web";
import Pointer from "./Components/Pointer";

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

  const location = useLocation();
  const hideNavbarRoutes = ["/signin", "/signup"];

  return (
    <div>
      {!hideNavbarRoutes.includes(location.pathname) && <Alert />}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/academic" element={<NotePage />} />
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
        <Route path="/credit" element={<CreditPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/courses/dsaH2Q1LBoBNiftg7X5ftna7oACf1mOmUVJsXhecfrQqoxDUx2R5Rrandom+text&rlz=1C5CHFA_enIN1111IN1111&oq=random+text&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
          element={<DSA />}
        />
        <Route
          path="/courses/aihqaL0sNi3eAfrNX4lWgjeC8xGj9Bt0PDGK3QG7xTuuFtMRdnourandom+text&rlz=1C5CHFA_enIN1111IN1111&oq=random+text&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
          element={<AI />}
        />
        <Route
          path="/courses/webwUCCttG8Hr5pudpr1mQK6Ab2vWjbpKjFE8loDHfe5W87fo4zd8random+text&rlz=1C5CHFA_enIN1111IN1111&oq=random+text&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDI0MTVqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
          element={<Web />}
        />

        <Route path="/cg" element={<Pointer />} />
      </Routes>
    </div>
  );
}

export default App;
