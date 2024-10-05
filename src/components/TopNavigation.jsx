"use client";

import * as React from "react";
import Image from "next/image";
import logo from "@/images/logo.jpg"; // Import the logo image
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function TopNavigation() {
  return (
    <NavigationMenu className="nav-class bg-white shadow-lg py-4">
      {/* Flexbox container with logo and nav items */}
      <div className="flex items-center justify-between w-full px-4 md:px-6 max-w-7xl mx-auto">
        
        {/* Logo on the left */}
        <NavigationMenuLink href="/" className="flex items-center">
          <Image
            src={logo} // Use the imported logo
            alt="Logo"
            width={40} // Adjust the width and height as needed
            height={40}
            className="h-10 w-10"
          />
        </NavigationMenuLink>

        {/* Left aligned nav items */}
        <NavigationMenuList className="hidden md:flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#courses"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              Courses
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Right aligned nav items - Login and Signup buttons */}
        <NavigationMenuList className="hidden md:flex space-x-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/register"
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Signup
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden mt-4">
        <NavigationMenuList className="flex flex-col space-y-4 px-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#courses"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              Courses
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className="text-gray-800 font-medium hover:text-gray-600 transition-colors"
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/register"
              className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Signup
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
