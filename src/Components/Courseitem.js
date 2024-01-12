import React from 'react'

const Courseitem = (props) => {
    const { course, index } = props;
    return (
        <tr>
            <th className= "d-flex justify-content-center align-items-center" scope="row">{index}</th>
            <td>{course.title}</td>
            <td>{course.description}</td>
            <td>{course.instructor}</td>
            <td>{course.duration}</td>
            <td><i className="d-flex justify-content-center align-items-center fa-solid fa-pen-to-square"></i></td>
            <td><i className="d-flex justify-content-center align-items-center fa-sharp fa-solid fa-trash"></i></td>
        </tr>
    )
}

export default Courseitem
