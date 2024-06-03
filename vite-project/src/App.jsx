import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import NotePage from './Pages/NotePage';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>} /> 
        <Route path="/notes" element={<NotePage />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
