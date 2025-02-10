import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { PulseLoader } from "react-spinners"; // Loader
import { API_URLS, ENDPOINTS } from "../src/config";

const SignupPage = () => {
  const [user, setUser] = useState({ name: "", employee_id: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle state
  const navigate = useNavigate();

  // Validate inputs
  const validateForm = () => {
    if (!user.name || !user.employee_id || !user.password) {
      setError("All fields are required.");
      return false;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(user.password)) {
      setError("Password must be at least 8 characters, include 1 lowercase, 1 uppercase, 1 number, and 1 special character.");
      return false;
    }
    return true;
  };

  // Handle input change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      await axios.post(API_URLS.SIGN_UP, user);
      setSuccess(true);
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex">
      {/* Left Section with Image & Welcome Text */}
      <div className="w-1/3 bg-[url('/assets/signup-bg.jpg')] bg-cover bg-center relative flex flex-col justify-center items-center text-white p-8">
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50"></div>
        <div className="relative z-10 text-center max-w-xs">
          <h2 className="text-2xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-sm">
            Wellness Buddy helps you prioritize your well-being by tracking wellness
            metrics, providing smart reminders, and supporting mental health.
          </p>
          <button onClick={() => navigate(ENDPOINTS.SIGN_IN)} className="mt-6 bg-[#1B5E3A] px-6 py-2 rounded-md text-white font-semibold hover:bg-darkGreen">
            Sign In
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-2/3 flex justify-center items-center bg-white p-12">
        <div className="max-w-md w-full">
          {/* Show Success Message */}
          {success ? (
            <div className="text-center bg-green-100 text-green-700 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Registration Successful! 🎉</h2>
              <p className="mt-2">You have successfully created your account.</p>
              <button
                onClick={() => navigate(ENDPOINTS.SIGN_IN)}
                className="mt-4 bg-[#1B5E3A] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#2E7D5C]"
              >
                Go to Sign In
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Your Account</h2>

              {/* Show Error Message */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              {/* Signup Form */}
              <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                  <label className="block text-gray-700 font-medium">Full Name</label>
                  <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Employee ID</label>
                  <input type="text" name="employee_id" placeholder="Employee ID" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen pr-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <small className="text-gray-500 text-sm">
                    Password must be at least 8 characters, include 1 lowercase, 1 uppercase, 1 number, and 1 special character.
                  </small>
                </div>

                <button type="submit" className="w-full bg-[#1B5E3A] text-white py-3 rounded-md font-semibold hover:bg-[#2E7D5C] flex items-center justify-center" disabled={loading}>
                  {loading ? <PulseLoader color="#fff" size={8} /> : "Create Account"}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
