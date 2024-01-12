import courseContext from './courseContext';
import { useState } from 'react';

const CourseState = (props) => {
    const courseInitial=[
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "659ee67ed0396b1d7b764664",
              "admin": "659eb22c2180895cf670fe02",
              "title": "Web Development",
              "description": "This the best Web Development Course",
              "instructor": "Sharaddha Didi",
              "duration": "3 Weeks",
              "tag": "Web Development",
              "__v": 0
            },
            {
              "_id": "65a0eecf984dab83dbaef778",
              "admin": "659eb22c2180895cf670fe02",
              "title": "React Development",
              "description": "This the best React Development Course",
              "instructor": "Harry Bhai",
              "duration": "10 Weeks",
              "tag": "React Development",
              "__v": 0
            }
          ]
          const [courses, setCourses] = useState(courseInitial)

            return (
                <courseContext.Provider value={{ courses, setCourses }}>
                    {props.children}
                </courseContext.Provider>
            );
        
}

export default CourseState;
