import Link from "next/link";
import { Button } from "./ui/button";

const IntroSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:py-24 sm:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Welcome to Our Student Enrollment Platform
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl mb-6 text-gray-700">
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
