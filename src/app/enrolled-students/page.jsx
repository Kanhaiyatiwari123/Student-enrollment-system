"use client";

import React from "react";
import { useEffect, useState } from "react";

const EnrolledStudents = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch students data from local storage
    const data = JSON.parse(localStorage.getItem("studentData"));
    if (data) {
      setStudents(data);
    }

    const course = JSON.parse(localStorage.getItem("selectedCourses"));
    if (course) {
      setCourses(course);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-8 bg-[#d7c6bd]">
      <div className="mb-4 bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Enrolled Students</h2>

        <div className="mb-2">
          <label className="text-lg font-bold">Student Name:</label>
          <span className="text-lg pl-2">{students.firstName} </span>
          <span className="text-lg">{students.lastName}</span>
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">Enrolled Courses:</label>
          <div className="mt-2">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <p key={index} className="text-gray-700">
                  {course}
                </p>
              ))
            ) : (
              <p>No courses enrolled.</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-lg font-bold">Mode:</label>
          <p>{students.mode}</p>
        </div>
      </div>
    </div>
  );
};

export default EnrolledStudents;
