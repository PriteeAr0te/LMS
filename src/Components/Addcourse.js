import { useContext, useState, useRef } from 'react'
import courseContext from '../Context/Courses/courseContext'

const Addcourse = (props) => {
    const context = useContext(courseContext)
    const { addCourse } = context;
    const [course, setCourse] = useState({ title: "", description: "", instructor: "", duration: "", tag: "Default" })

    const onChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault();
        addCourse(course.title, course.description, course.instructor, course.duration, course.tag)
        refClose.current.click()
    }

    const refClose = useRef(null); 
 

    return (
        <>
            <div>
            <div className="popup-form">
                <form>
                    <div className="row mb-3">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="title" id="title" onChange={onChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="description" id="description" onChange={onChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="instructor" className="col-sm-2 col-form-label">Instructor</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="instructor" id="instructor" onChange={onChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="duration" className="col-sm-2 col-form-label">Duration</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="duration" id="duration" onChange={onChange} />
                        </div>
                    </div>
                    <div className="row mb-3">
                         <label htmlFor="tag" className="col-sm-2 col-form-label">Tag</label>
                         <div className="col-sm-10">
                             <input type="text" className="form-control" name="tag" id="tag" onChange={onChange} />
                        </div>
                     </div>
                     <button
                        type="button"
                        className="btn mx-3"
                        onClick={handleClick}
                        style={{backgroundColor:'#2a9d8f'}}
                    >
                        Add Course
                    </button>
                    <button
                       ref = {refClose}
                        type="button"
                        className="btn mx-3"
                        onClick={() => props.setFormVisible(false)}
                        style={{backgroundColor:'#2a9d8f'}}
                    >
                        Close
                    </button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Addcourse
