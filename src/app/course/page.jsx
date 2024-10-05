"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const courses = [
  { name: "Data Structures", prerequisites: "Basic Programming", duration: "3 months" },
  { name: "Algorithms", prerequisites: "Data Structures", duration: "4 months" },
  { name: "Web Development", prerequisites: "HTML, CSS", duration: "6 months" },
  { name: "Operating Systems", prerequisites: "Fundamentals", duration: "5 months" },
  { name: "Database Systems", prerequisites: "None", duration: "3 months" },
  { name: "Java", prerequisites: "None", duration: "5 months" },
  // Aur bhi courses add kar sakte ho yahan
];

const courseSchema = z.object({
  selectedCourses: z.array(z.string()).nonempty("At least one course must be selected"),
});

const CourseSelection = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(courseSchema),
  });

  const onSubmit = (data) => {
    console.log("Selected Courses:", data.selectedCourses);
    localStorage.setItem("selectedCourses", JSON.stringify(data.selectedCourses));
    alert("Courses selected successfully!");

    router.push("/profile");      //navigating to profile page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[url('https://cdn.pixabay.com/photo/2024/04/12/08/22/background-8691370_1280.png')] bg-cover bg-center">
      
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Course Selection</h2>
        <div className="mb-4">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-2 mb-2 rounded shadow-md">
            <input
              type="checkbox"
              id={course.name}
              value={course.name}
              {...register("selectedCourses")}
            />
            <label htmlFor={course.name} className="pl-2">
              {course.name} - <p className="pl-5">Prerequisites: {course.prerequisites}</p>  <p className="pl-5">Duration: {course.duration}</p>
            </label>
          </div>
        ))}
        {errors.selectedCourses && <p className="text-red-500 text-sm">{errors.selectedCourses.message}</p>}
        </div>


        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full md:w-auto">Select Courses</button>
      </form>
    </div>
  );
};

export default CourseSelection;
