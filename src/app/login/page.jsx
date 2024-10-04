"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Login ka validation schema banayenge
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().nonempty({ message: "Password cannot be empty" }),
});

const Login = () => {
  const router = useRouter(); // Login hone ke baad hum user ko profile page pe navigate karenge
  const [loginError, setLoginError] = useState("");         // useState hook use kiya to manage or show login error messages

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),  // Zod ka schema use kar rahe hain validation ke liye
  });

  // Jab user form submit karega, yeh function chalega
  const onSubmit = (data) => {
    // Local storage se user data nikal rahe hain
    const students = JSON.parse(localStorage.getItem("studentData")) ;

//Check if stored Data or students Data is an array (multiple students) or an object (single student) ->(In our case it's an object because localStorage is storing only single student's data at a time while registering).
    let user;
    if (Array.isArray(students)) {
        // If it's an array, use .find() to locate the user
        user = students.find(
          (student) => student.email === data.email && student.password === data.password       
          // Check karte hain ki kya entered email aur password registered users ke data se match karta hai
        );
      } else if (students && typeof students === "object") {
        // If it's a single object, compare directly
        if (students.email === data.email && students.password === data.password) {
          user = students;
        }
      }

    if (user) {
      alert("Login successful!");  // Agar match ho jata hai ya user mil jata hai ya exist krta hai toh success message dikhayenge
      localStorage.setItem("loggedInUser", JSON.stringify(user));   //Logged in user ka data store karenge
      router.push("/profile");  // Profile page pe navigate karenge
    } else {
      setLoginError("Invalid email or password!");  // Agar email ya password galat hai(yani ke user nahi mila) toh error dikhayenge
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#ebebeb]">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl text-center font-bold mb-4">Login</h2>
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Error Message */}
        {loginError && (
            <p className="text-red-500 text-sm mb-4">{loginError}</p>
        )}

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>

        <div className="text-center mt-5">
        <p className="mb-2">Not registered? Register Now</p>
        <Button variant="secondary" className=" bg-purple-600 hover:bg-purple-900 text-white py-2 px-4 rounded" asChild>
            <Link href="/register">Register here</Link>
        </Button> 
        </div>
       

        <p></p>
      </form>
    </div>
  );
};

export default Login;
