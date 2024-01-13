import React,{useContext} from 'react';
import courseContext from '../Context/Courses/courseContext';

const Courseitem = (props) => {
    const context = useContext(courseContext);
    const { deleteCourse } = context;
    const { course, index, updateCourse } = props;
    return (
        <tr>
            <th className= "d-flex justify-content-center align-items-center" scope="row">{index}</th>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.instructor}</td>
            <td>{course.duration}</td>
            <td><i className="d-flex justify-content-center align-items-center fa-solid fa-pen-to-square" onClick={()=> {updateCourse(course)}}></i></td>
            <td><i className="d-flex justify-content-center align-items-center fa-sharp fa-solid fa-trash" onClick={()=> {deleteCourse(course._id)}}></i></td>
        </tr>
    )
}

export default Courseitem
