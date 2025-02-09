import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="h-screen w-full flex">
      {/* Left Section with Image & Welcome Text */}
      <div className="w-1/3 bg-[url('../assets/signup-bg.jpg')] bg-cover bg-center relative flex flex-col justify-center items-center text-white p-8">
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
        <div className="relative z-10 text-center max-w-xs">
          <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-sm">
            Wellness Buddy helps you prioritize your well-being by tracking wellness
            metrics, providing smart reminders, and supporting mental health. Achieve
            balance and take control of your wellness journey with ease.
          </p>
          <button className="mt-6 bg-[#1B5E3A] px-6 py-2 rounded-md text-white font-semibold hover:bg-[#2E7D5C]">
            Sign In
          </button>
        </div>
      </div>

      {/* Right Section with Signup Form */}
      <div className="w-2/3 flex justify-center items-center bg-white p-12">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Your Account</h2>

          {/* Signup Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Password</label>
              <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" />
            </div>
            <button type="submit" className="w-full bg-[#1B5E3A] text-white py-3 rounded-md font-semibold hover:bg-[#2E7D5C]">
              Create Account
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Sign up with Google */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md bg-[#A8D5BA] hover:bg-gray-200 text-gray-900 font-semibold">
            <FaGoogle className="text-lg mr-2" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
