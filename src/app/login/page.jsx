"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Login validation schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().nonempty({ message: "Password cannot be empty" }),
});

const Login = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    const students = JSON.parse(localStorage.getItem("studentData"));

    let user;
    if (Array.isArray(students)) {
      user = students.find(
        (student) =>
          student.email === data.email && student.password === data.password
      );
    } else if (students && typeof students === "object") {
      if (students.email === data.email && students.password === data.password) {
        user = students;
      }
    }

    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      router.push("/profile");
    } else {
      setLoginError("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#ebebeb]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg"
      >
        <h2 className="text-2xl text-center font-bold mb-6">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
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
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Error Message */}
        {loginError && (
          <p className="text-red-500 text-sm mb-4">{loginError}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Login
        </button>

        <div className="text-center mt-5">
          <p className="mb-2">Not registered? Register Now</p>
          <Button
            variant="secondary"
            className="bg-purple-600 hover:bg-purple-900 text-white py-2 px-4 rounded"
            asChild
          >
            <Link href="/register">Register here</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
