import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Courses from './Components/Courses';
import Signup from './Components/Signup';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
