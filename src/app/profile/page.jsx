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
    return <div>No student data available. Please register and select courses.</div>;
  }

  const navigateTo = () => {
    router.push("/editProfile");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#b3a49c]">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Student Profile</h2>
        
        {/* Displaying student details */}
        <div className='bg-white pb-5 rounded w-full max-w-md'>
          <p><strong>Name:</strong> {studentData.firstName} {studentData.lastName}</p>
        </div>
        <div className='bg-white pb-5 rounded w-full max-w-md'>  
          <p><strong>Email:</strong> {studentData.email}</p>
        </div>
        <div className='bg-white pb-5 rounded w-full max-w-md'>   
          <p><strong>Phone:</strong> {studentData.phoneNumber}</p>
        </div>
        <div className='bg-white pb-5 rounded w-full max-w-md'>    
          <p><strong>Age:</strong> {studentData.age}</p>
        </div>
        <div className='bg-white pb-5 rounded w-full max-w-md'>    
          <p><strong>Address:</strong> {studentData.address}</p>
        </div>
        <div className='bg-white pb-5 rounded w-full max-w-md'>    
          <p><strong>City:</strong> {studentData.city}</p>
        </div>    
        <div className='bg-white pb-5 rounded w-full max-w-md'>    
          <p><strong>Mode:</strong> {studentData.mode}</p>
        </div>    
        
      
        <h3 className="text-xl font-bold mt-3">Selected Courses:</h3>
        
        {/* Displaying selected courses */}
        <ul>
          {selectedCourses.length > 0 ? (
            selectedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))
          ) : (
            <p>No courses selected.</p>
          )}
        </ul>
        
        <button onClick={navigateTo} className="bg-blue-500 text-white py-2 px-4 rounded mt-5">Edit Profile</button>

        <button onClick={() => router.push("/course")}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-5 float-end">
          {'<'} Course Selection
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
