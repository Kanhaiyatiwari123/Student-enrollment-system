"use client";

import React from "react";

const Contact = () => {
  return (
    <div className="min-h-[95vh] flex flex-col items-center justify-center p-4">
      <div className="bg-[#f7f7f7] p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl text-center font-bold mb-6">Contact Us</h1>

        {/* Contact Details */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4">
            If you have any questions or need assistance, feel free to reach out to us. 
            We're here to help you with your enrollment process and any other inquiries you might have.
          </p>

          {/* Email Address */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p className="text-blue-600">enrollment@ourplatform.com</p> 
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p className="text-blue-600">+91 8218765495</p> 
          </div>
         
          {/* Address */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Address:</h3>
            <p>02, R.K. Nagar, Sector-3, New Delhi - 110085, Delhi, India</p>
          </div>

          {/* Short Message */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Our Message</h3>
            <p>
              &quot;Your success is our priority. Reach out to us anytime for support on your learning journey.&quot;
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
