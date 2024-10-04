import Link from "next/link";
import { Button } from "./ui/button";

const IntroSection = () => {
  return (
    <div className="bg-gray-100 py-24 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4 text-black-600">
          Welcome to Our Student Enrollment Platform
        </h1>

        {/* Description */}
        <p className="text-lg mb-6 text-gray-700">
          Join our platform to enroll in a variety of computer science courses designed to boost your skills and career prospects. Whether you&apos;re a beginner or looking to advance your knowledge, we have the right courses for you.
        </p>

        {/* Register Button */}
        <Button variant="default" asChild>
        <Link href="/register">
          Get Started
        </Link>
        </Button>
        
      </div>
    </div>
  );
};

export default IntroSection;
