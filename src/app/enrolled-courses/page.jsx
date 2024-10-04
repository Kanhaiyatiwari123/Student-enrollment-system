//This page is not used in the project

"use client";

import React, { useEffect, useState } from "react";

const EnrolledCourses = () => {
  // State to hold the enrolled courses
  const [courses, setCourses] = useState([]);

  // Fetch the enrolled courses from local storage on component mount
  useEffect(() => {
    const savedCourses = JSON.parse(localStorage.getItem("selectedCourses")) || [];
    console.log(savedCourses);
    setCourses(savedCourses);
    // console.log("Courses State: ", courses); // Log the state after setting
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Enrolled Courses</h2>
      {courses.length === 0 ? (
        <p className="text-gray-500">No courses enrolled yet.</p>
      ) : (
        <ul className="w-full max-w-md">
          {courses.map((course, index) => (
            <li key={index} className="bg-white p-4 mb-2 rounded shadow-md">
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p>Duration: {course.duration}</p>
              <p>Prerequisites: {course.prerequisites}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrolledCourses;
