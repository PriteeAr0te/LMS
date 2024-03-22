import React from 'react'
import './App.css';
import Dashboard from './Components/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CourseState from './Context/Courses/courseState'
import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
    <>
    <CourseState >
    <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </CourseState>
    </>
  );
}

export default App;
