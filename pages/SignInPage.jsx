import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignInPage = () => {
    return (
        <div className="h-screen w-full flex">
            {/* Left Section - Sign In Form */}
            <div className="w-2/3 flex justify-center items-center bg-white p-12">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Sign In</h2>
                    <p className="text-gray-600 text-center mb-6">
                        Enter the information you entered while registering.
                    </p>

                    {/* Sign In Form */}
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Password</label>
                            <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" />
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center text-gray-700">
                                <input type="checkbox" className="mr-2 text-deepGreen" />
                                Remember me
                            </label>
                            <a href="#" className="text-deepGreen font-semibold hover:underline">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full bg-[#1B5E3A] text-white py-3 rounded-md font-semibold hover:bg-[#2E7D5C]">
                            Sign In
                        </button>
                    </form>

                    {/* OR Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-3 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Sign in with Google */}
                    <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md bg-[#A8D5BA] hover:bg-gray-200 text-gray-900 font-semibold">
                        <FaGoogle className="text-lg mr-2" />
                        Sign In with Google
                    </button>

                    {/* Sign Up Redirect */}
                    <p className="text-center mt-4 text-gray-700">
                        Don’t have an account? <a href="#" className="font-bold text-black hover:underline">create</a>
                    </p>
                </div>
            </div>

            {/* Right Section - Image & Sign Up CTA */}
            <div className="w-1/3 relative flex flex-col justify-center items-center text-white p-8 bg-cover bg-center" style={{ backgroundImage: "url('/assets/auth.png')" }}>
                {/* Overlay with Transparency */}
                <div className="absolute inset-0 bg-gray-700 bg-opacity-20"></div>

                {/* Content on Top */}
                <div className="relative z-10 text-center max-w-xs">
                    <h2 className="text-2xl font-bold mb-4">New Here?</h2>
                    <p className="text-sm">
                        Enter your personal details and start your journey with us.
                    </p>
                    <button className="mt-6 bg-[#1B5E3A] px-6 py-2 rounded-md text-white font-semibold hover:bg-[#2E7D5C]">
                        Sign Up
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SignInPage;
