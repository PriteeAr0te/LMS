import React, { useContext, useEffect, useRef, useState } from 'react';
import courseContext from '../Context/Courses/courseContext';
import Courseitem from './Courseitem';
import Addcourse from './Addcourse';

const Dashboard = () => {
  const context = useContext(courseContext);
  const { courses, getCourses, editCourse } = context;

  const [course, setCourse] = useState({ id: "", etitle: "", edescription: "", einstructor: "", eduration: "", etag: "" })

  useEffect(() => {
    // eslint-disable-next-line 
    getCourses();
  }, [])

  const [FormVisible, setFormVisible] = useState(false)

  const handleAddCourse = () => {
    setFormVisible(true)
  }

  const updateCourse = (currentCourse) => {
    console.log("Current Course Details:", currentCourse);
    refEdit.current.click();
    setCourse({
      id: currentCourse._id,
      etitle: currentCourse.title,
      edescription: currentCourse.description,
      einstructor: currentCourse.instructor,
      eduration: currentCourse.duration,
      etag: currentCourse.tag,
    });
  };

  const handleClick = (e) => {
    console.log("Updating a Course", course);
    editCourse(
      course.id,
      course.etitle,
      course.edescription,
      course.einstructor,
      course.eduration,
      course.etag
    );
    refClose.current.click();
  };

  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }
  const refEdit = useRef(null);
  const refClose = useRef(null);


  return (
    <>
      {/* Html Course for Editing Course */}
      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#editCourseModel" data-bs-whatever="@mdo" ref={refEdit}>
  Open modal for Edit
</button>

<div className="modal fade" id="editCourseModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{ backgroundColor: '#e9c46a' }}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="edit-course">Edit Course </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-1 fw-bold">
            <label htmlFor="etitle" className="col-form-label">
              Title <i style={{ color: "red" }}>*</i>
            </label>
            <input
              type="text"
              className="form-control"
              value={course.etitle}
              name="etitle"
              onChange={onChange}
              id="etitle"
              minLength={2}
              required
            />
          </div>
          <div className="mb-1 fw-bold">
            <label htmlFor="edescription" className="col-form-label">
              Description
            </label>
            <textarea
              className="form-control"
              value={course.edescription}
              name="edescription"
              onChange={onChange}
              id="edescription"
              minLength={2}
              style={{ overflow: 'auto', height: 'auto' }}
            ></textarea>
          </div>
          <div className="mb-1 fw-bold">
            <label htmlFor="einstructor" className="col-form-label">Instructor<i style={{ color: 'red' }}>*</i></label>
            <input type="text" className="form-control" value={course.einstructor} name="einstructor" onChange={onChange} id="einstructor" minLength={2} required />
          </div>
          <div className="mb-1 fw-bold">
            <label htmlFor="eduration" className="col-form-label">Duration <i style={{ color: 'red' }}>*</i></label>
            <input type="text" className="form-control" value={course.eduration} name="eduration" onChange={onChange} id="eduration" minLength={2} required />
          </div>
          <div className="mb-1 fw-bold">
            <label htmlFor="etag" className="col-form-label">Tag</label>
            <input type="text" className="form-control" value={course.etag} name="etag" onChange={onChange} id="etag" minLength={2} />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#415a77' }}>Close</button>
        <button disabled={course.etitle.length < 2 || course.einstructor.length < 2 || course.eduration.length < 2} type="button" className="btn btn-primary" onClick={handleClick} style={{ backgroundColor: '#415a77' }}>Edit Course</button>
      </div>
    </div>
  </div>
</div>


      {/* Html code for Displaying Course */}
      <div className="centered">
        <div className="container">
          <div className="title">
            {/* <h1>Dashboard</h1> */}
          </div>
          <div className="overflow" style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <div className="main-content m-3">
              <table className="table table-dark table-striped">
                <thead className="position-sticky top-0 bg-dark">
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
                  {courses.map((currentCourse, index) => {
                    return (
                      <Courseitem key={course._id} course={currentCourse} updateCourse={updateCourse} index={index + 1} />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="button">
            <button type="button" data-bs-toggle="modal"
              data-bs-target="#addCourseModal" className="btn mt-3" onClick={() => handleAddCourse()} style={{ backgroundColor: '#415a77' }}>Add New Course</button>
          </div>

          {FormVisible && (
            <Addcourse setFormVisible={setFormVisible} />
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
