import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import NotePage from './Pages/NotePage';
import Courses from './Pages/ Courses';
import Attendance from './Pages/Attendance';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>} /> 
        <Route path="/notes" element={<NotePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/attendance" element={<Attendance />} />

      </Routes>
    </div>
  </Router>
  )
}

export default App
