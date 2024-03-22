import courseContext from './courseContext';
import { useState } from 'react';
import React from 'react';

const CourseState = (props) => {
  const host = "https://lms-shog-api.vercel.app/";
  const courseInitial = []



  //Get all Courses
  const getCourses = async () => {
    //Fetch API
    const response = await fetch(`${host}api/course/fetchallcourses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1OWViMjJjMjE4MDg5NWNmNjcwZmUwMiJ9LCJpYXQiOjE3MDQ4OTk0ODN9.gqlmZANBcf5D-o7sR8T6FPx9BHwsz8P29ERD8407Pnc"
      }
    });
    const json = await response.json();
    console.log(json)
    setCourses(json)
  }


  //Add a Course 
  const addCourse = async(title, description, instructor, duration, tag) => {

    //Fetch API
    const response = await fetch(`${host}api/course/addcourse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1OWViMjJjMjE4MDg5NWNmNjcwZmUwMiJ9LCJpYXQiOjE3MDQ4OTk0ODN9.gqlmZANBcf5D-o7sR8T6FPx9BHwsz8P29ERD8407Pnc"
      },
      body: JSON.stringify({ title, description, instructor, duration, tag }),
    });
    const course = await response.json();
    setCourses(courses.concat(course)) 
  }

  //Edit a Course 
  const editCourse = async (id, title, description, instructor, duration, tag) => {
    //Fetch API
    const response = await fetch(`${host}api/course/updatecourse/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1OWViMjJjMjE4MDg5NWNmNjcwZmUwMiJ9LCJpYXQiOjE3MDQ4OTk0ODN9.gqlmZANBcf5D-o7sR8T6FPx9BHwsz8P29ERD8407Pnc"
      },
      body: JSON.stringify({ title, description, instructor, duration, tag }),
    });
    const json = await response.json();
    console.log(json)

    //Logic to Edit Course
    const updatedCourses = courses.map(course => {
      if (course._id === id) {
        return {
          ...course,
          title,
          description,
          instructor,
          duration,
          tag,
        };
      }
      return course;
    });
  
    setCourses(updatedCourses);
  }

  //Delete a Course
  const deleteCourse = async (id) => {
    //Delete Course API
    const response = await fetch(`${host}api/course/deletecourse/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjY1OWViMjJjMjE4MDg5NWNmNjcwZmUwMiJ9LCJpYXQiOjE3MDQ4OTk0ODN9.gqlmZANBcf5D-o7sR8T6FPx9BHwsz8P29ERD8407Pnc"
      }
    });
    const json = await response.json();
    console.log(json)
    setCourses(json)

    //Logic to delete course
    console.log("Deleteing course with id: " + id)
    const newCourse = courses.filter((course) => { return course._id !== id })
    setCourses(newCourse)
  }
  const [courses, setCourses] = useState(courseInitial)

  return (
    <courseContext.Provider value={{ courses, addCourse, editCourse, deleteCourse, getCourses }}>
      {props.children}
    </courseContext.Provider>
  );

}

export default CourseState;
