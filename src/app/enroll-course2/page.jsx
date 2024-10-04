//This page is not used in the project

"use client";

import React from "react";

const ProfilePage = () => {
  // Local storage se data fetch karein
  const selectedCourses = JSON.parse(localStorage.getItem("selectedCourses")) || [];
  const modeOfStudy = localStorage.getItem("mode") || 'N/A';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Student Profile</h2>

      {/* Mode of Study */}
      <div className="mb-4 bg-white p-6 rounded shadow-md w-full max-w-md">
        <h3 className="text-lg font-semibold">Mode of Study</h3>
        <p>{modeOfStudy}</p>
      </div>

      {/* Enrolled Courses */}
      <div className="mb-4 bg-white p-6 rounded shadow-md w-full max-w-md">
        <h3 className="text-lg font-semibold">Enrolled Courses</h3>
        {selectedCourses.length > 0 ? (
          <ul className="list-disc pl-5">
            {selectedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        ) : (
          <p>No courses enrolled.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
