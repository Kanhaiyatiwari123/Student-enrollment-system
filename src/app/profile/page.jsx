"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const router = useRouter();

  // State to store fetched data
  const [studentData, setStudentData] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Fetching data from local storage on component mount
  useEffect(() => {
    // Getting student details from local storage
    const storedData = localStorage.getItem('studentData');
    if (storedData) {
      setStudentData(JSON.parse(storedData));
    }

    // Getting selected courses from local storage
    const storedCourses = localStorage.getItem('selectedCourses');
    if (storedCourses) {
      setSelectedCourses(JSON.parse(storedCourses));
    }
  }, []);

  // If no data is available
  if (!studentData) {
    return <div className="flex justify-center items-center min-h-screen">No student data available. Please register and select courses.</div>;
  }

  const navigateTo = () => {
    router.push("/editProfile");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b3a49c] p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md sm:max-w-lg lg:max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Profile</h2>
        
        {/* Displaying student details */}
        <div className="mb-4">
          <p><strong>Name:</strong> {studentData.firstName} {studentData.lastName}</p>
        </div>
        <div className="mb-4">
          <p><strong>Email:</strong> {studentData.email}</p>
        </div>
        <div className="mb-4">
          <p><strong>Phone:</strong> {studentData.phoneNumber}</p>
        </div>
        <div className="mb-4">
          <p><strong>Age:</strong> {studentData.age}</p>
        </div>
        <div className="mb-4">
          <p><strong>Address:</strong> {studentData.address}</p>
        </div>
        <div className="mb-4">
          <p><strong>City:</strong> {studentData.city}</p>
        </div>
        <div className="mb-4">
          <p><strong>Mode:</strong> {studentData.mode}</p>
        </div>

        <h3 className="text-xl font-bold mt-3">Selected Courses:</h3>
        
        {/* Displaying selected courses */}
        <ul className="list-disc pl-5">
          {selectedCourses.length > 0 ? (
            selectedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))
          ) : (
            <p>No courses selected.</p>
          )}
        </ul>
        
        <div className="flex flex-col sm:flex-row justify-between mt-5 gap-3">
          <button 
            onClick={navigateTo} 
            className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto">
            Edit Profile
          </button>

          <button 
            onClick={() => router.push("/course")} 
            className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto">
            {'<'} Course Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
