import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import NotePage from './Pages/NotePage';
import Courses from './Pages/ Courses';
import Attendance from './Pages/Attendance';
import Group from './Pages/ Group';
import Dashboard from './Pages/Dashboard';
import Board from './Pages/Board';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import NoteForm from './Pages/NoteForm';


function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/Noteform" element={<NoteForm></NoteForm>} />
      <Route path="/signup" element={<SignUp></SignUp>} />
      <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="/" element={<Navbar/>} /> 
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/notes" element={<NotePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/group" element={<Group/>} />
        <Route path="/board" element={<Board/>} /> 

      </Routes>
    </div>
  </Router>
  )
}

export default App
