import { useContext, useState, useRef } from 'react'
import courseContext from '../Context/Courses/courseContext'

const Addcourse = (props) => {
    const { setFormVisible } = props;
    const context = useContext(courseContext)
    const { addCourse } = context;
    const [course, setCourse] = useState({ title: "", description: "", instructor: "", duration: "", tag: "Default" })

    const onChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }

    const handleClickAdd = (e) => {
        e.preventDefault();
        addCourse(course.title, course.description, course.instructor, course.duration, course.tag)
        refClose.current.click()
    }

    const refClose = useRef(null);

    return (
        <>
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#addCourseModal" data-bs-whatever="@fat">Open modal for Add Course</button>

            <div className="modal fade" id="addCourseModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: '#e9c46a' }}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="add-course">Add New Course</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-1 fw-bold">
                                    <label htmlFor="title" className="col-form-label">Title <i style={{ color: 'red' }}>*</i></label>
                                    <input type="text" className="form-control" value={course.title} name="title" onChange={onChange} id="title" minLength={2}  required />
                                </div>
                                <div className="mb-1 fw-bold">
                                    <label htmlFor="description" className="col-form-label">Description</label>
                                    <textarea className="form-control" value={course.description} name="description" onChange={onChange} id="description" minLength={2}></textarea>
                                </div>
                                <div className="mb-1 fw-bold">
                                    <label htmlFor="instructor" className="col-form-label">Instructor<i style={{ color: 'red' }}>*</i></label>
                                    <input type="text" className="form-control" value={course.instructor} name="instructor" onChange={onChange} id="instructor" minLength={2}  required />
                                </div>
                                <div className="mb-1 fw-bold">
                                    <label htmlFor="duration" className="col-form-label">Duration <i style={{ color: 'red' }}>*</i></label>
                                    <input type="text" className="form-control" value={course.duration} name="duration" onChange={onChange} id="duration" minLength={2}  required />
                                </div>
                                <div className="mb-1 fw-bold">
                                    <label htmlFor="tag" className="col-form-label">Tag</label>
                                    <input type="text" className="form-control" value={course.tag} name="tag" onChange={onChange} id="tag" minLength={2} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ backgroundColor: '#2a9d8f' }}>Close</button>
                            <button disabled={course.title.length < 2 || course.instructor.length < 2 || course.duration.length < 2} type="button" className="btn btn-primary" onClick={handleClickAdd} style={{ backgroundColor: '#2a9d8f' }}>Add New Course</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addcourse
