import React, { useContext, useState } from 'react';
import courseContext from '../Context/Courses/courseContext';
import Courseitem from './Courseitem';

const Dashboard = () => {
  const context = useContext(courseContext);
  const { courses } = context;

  const [FormVisible , setFormVisible] = useState(false)

  const handleAddCourse = () => {
    setFormVisible(true);
  }

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.substring(0, maxLength-10)}...` : text;
  };
  
  const truncateFields = (course) => {
    const maxLength = 30; // Adjust the max length as needed
    return {
      ...course,
      title: truncateText(course.title, maxLength),
      instructor: truncateText(course.instructor, maxLength),
      description: truncateText(course.description, maxLength),
    };
  };

  return (
    <div className="centered d-flex justify-content-center align-items-center">
        <div className="container">
        <div className="title">
          <h1>Dashboard</h1>
        </div>
        <div className="overflow" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <div className="main-content m-3">
          <table className="table table-dark table-striped">
            <thead className ="position-sticky top-0 bg-dark">
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Instructor</th>
                <th scope="col">Duration</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody className="custom-tbody">
            {courses.map((course, index) => {
                  const truncatedCourse = truncateFields(course);

                  return (
                    <Courseitem key={course._id} course={truncatedCourse} index={index + 1} />
                  );
                })}
            </tbody>
          </table>
        </div>
        </div>
          <div className="button">
            <button type="button" className="btn mt-3" onClick={handleAddCourse} style={{backgroundColor:'#2a9d8f'}}>Add New Course</button>
          </div>
        {FormVisible  && (
            <div className="popup-form">
              <form>
                <div class="row mb-3">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" />
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setFormVisible(false)}
                >
                  Close
                </button>
              </form>
            </div>
            )}
        </div>
    </div>
  );
};

export default Dashboard;
