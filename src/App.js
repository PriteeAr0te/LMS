import React from 'react'
import './App.css';
import Dashboard from './Components/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CourseState from './Context/Courses/courseState';

function App() {
  return (
    <>
    <CourseState>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </CourseState>
    </>
  );
}

export default App;
