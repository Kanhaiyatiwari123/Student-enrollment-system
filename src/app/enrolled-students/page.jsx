"use client";

import React from "react";
import { useEffect, useState } from "react";

const EnrolledStudents = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {                   //Wrapped in useEffect as localStorage error was coming because useEffect is good for client side data fetching
         // Local storage se students data fetch karein
       const data = JSON.parse(localStorage.getItem("studentData"));
       console.log(data);
       if(students){
        setStudents(data);
       }

       const course = JSON.parse(localStorage.getItem("selectedCourses"));
       console.log(course);
       if(course){
        setCourses(course);
       }
    }, [students])
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 py-12 bg-[#d7c6bd]">
      
          <div className="mb-4 bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Enrolled Students</h2>
           <div>
            <label className="text-lg font-bold">Student Name:</label>
            <span className="text-lg pl-2">{students.firstName} </span>
            <span className="text-lg">{students.lastName}</span>
           </div>

          <div className="text-lg mb-4 mt-4">
            <label className="text-lg font-bold">Enrolled Courses:</label>
            {/* <span>{courses}</span> */}
            
            <div className="mb-4">
             {courses.map((course, index) => (
          
            
            <p key={index}>
               {course}
            </p>
          
             ))}
            </div>  
          </div>
           
           <div className="text-lg mb-4 mt-4">
            <label className="font-bold">Mode</label>
            <p>{students.mode}</p>
           </div>
           
           {/* <div>
               <h4 className="font-semibold">Courses Enrolled:</h4>
              {students.selectedCourses.length > 0 ? (
                <ul className="list-disc pl-5">
                  {student.selectedCourses.map((course, index) => (
                    <li key={index}>{selectedCourses}</li>
                  ))}
                </ul>
              ) : (
                <p>No courses enrolled.</p>
              )} 
            </div> */}
          </div>
    
    </div>
  );
};

export default EnrolledStudents;
