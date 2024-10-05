"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";


const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email("Invalid email"),
  age: z.number().min(15, "You must be at least 15 years old"),
  address: z.string().min(5, {message: "Address must be at least 5 characters"}),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().nonempty("City is required"),
  mode: z.enum(["Online", "Offline"], { message: "Please select a mode of study" }),
});

const Profile = () => {
    const router = useRouter();
    const [storedPassword, setStoredPassword] = useState("");

  // Form setup with Zod resolver
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
  });

  // Fetch data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("studentData"));
    if (storedData) {
      // Set form values from stored data
      setValue("firstName", storedData.firstName);
      setValue("lastName", storedData.lastName);
      setValue("email", storedData.email);
      setValue("age", storedData.age);
      setValue("address", storedData.address);
      setValue("phoneNumber", storedData.phoneNumber);
      setValue("city", storedData.city);
      setValue("mode", storedData.mode); 
      setStoredPassword(storedData.password || ""); // Get password if it exists 
    }
  }, [setValue]);

  
  const onSubmit = (data) => {
    const updatedData = {
      ...data,
      password: storedPassword || "defaultPassword123", // Fallback to default if no password exists
    };

    // Save updated data to local storage
    localStorage.setItem("studentData", JSON.stringify(updatedData));
    alert("Profile updated successfully!");

    router.push("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('https://cdn.pixabay.com/photo/2023/10/24/19/09/nevada-8338929_1280.jpg')] bg-cover bg-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-md mt-3 sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl space-y-4">
        <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

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

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
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

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
            id="address"
            type="text"
            {...register("address")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            {...register("phoneNumber")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* City Field */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            id="city"
            type="text"
            {...register("city")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>

         {/* Preferred Mode of Study Field */}
         <div className="mb-4">
          <label htmlFor="mode" className="block text-sm font-medium">
            Preferred Mode of Study
          </label>
          <input type="text"
            id="mode"
            {...register("mode")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.mode && (
            <p className="text-red-500 text-sm">{errors.mode.message}</p>
          )}
        </div>-

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full sm:w-auto"
        >
          Update Profile
        </button>

      </form>
    </div>
  );
};

export default Profile;
