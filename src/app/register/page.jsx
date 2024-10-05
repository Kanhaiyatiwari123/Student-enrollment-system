// app/register/page.jsx
"use client"; // Enables client-side rendering

import React from "react";
import { useForm } from "react-hook-form"; // Importing React Hook Form
import { zodResolver } from "@hookform/resolvers/zod"; // Resolver to use Zod with React Hook Form
import { useRouter } from "next/navigation";
import registrationSchema from "@/schemas/registerSchema";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Register = () => {
  const router = useRouter();

  // UseForm Hook for managing form state
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registrationSchema), // Integrating Zod for validation
  });

  // onSubmit Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // Just logging the data for now
    alert("Registration successful!"); // Feedback to the user

    localStorage.setItem('studentData', JSON.stringify(data));
    console.log('Data saved to localStorage:');

    router.push("/course"); // Navigating to course page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#d2d0d1]">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-[#fbf9fc] p-6 rounded shadow-md w-full max-w-md mt-3 sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>

        {/* First Name Field */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>
        
        {/* Last Name Field */}
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

         {/* Confirm Password */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        {/* Age Field */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium">Age</label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })} // Convert value to number
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            {...register("phoneNumber")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
        </div>

        {/* Address Field */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">Address</label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
        </div>
        
        {/* City Field */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium">City</label>
          <input
            id="city"
            type="text"
            {...register("city")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
        </div>

        {/* Preferred Mode of Study Field */}
        <div className="mb-4">
          <label htmlFor="mode" className="block text-sm font-medium">Preferred Mode of Study</label>
          <select
            id="mode"
            {...register("mode")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          {errors.mode && <p className="text-red-500 text-sm">{errors.mode.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto">Register</button>

        <div className="text-center mt-5">
          <p className="mb-2">Already registered? Login Now</p>
          <Button variant="secondary" className="bg-purple-600 hover:bg-purple-900 text-white py-2 px-4 rounded w-full sm:w-auto" asChild>
            <Link href="/login">Login here</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
