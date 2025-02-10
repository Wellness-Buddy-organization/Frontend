import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { PulseLoader } from "react-spinners"; // Loader
import { API_URLS, ENDPOINTS } from "../src/config";

const SignInPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ employee_id: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Toggle state
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Load stored credentials if "Remember Me" was checked before
    useEffect(() => {
        const storedEmployeeID = localStorage.getItem("remembered_employee_id");
        if (storedEmployeeID) {
            setCredentials((prev) => ({ ...prev, employee_id: storedEmployeeID }));
            setRememberMe(true);
        }
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError(""); // Clear error on input change
    };

    // Handle form submission
    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");
        if (!credentials.employee_id || !credentials.password) {
            setError("Employee ID and password are required.");
            return;
        }

        setLoading(true);
        try {
            const { data } = await axios.post(API_URLS.SIGN_IN, credentials);
            if (rememberMe) {
                localStorage.setItem("remembered_employee_id", credentials.employee_id);
                localStorage.setItem("token", data.token); // Store token in localStorage for persistence
            } else {
                localStorage.removeItem("remembered_employee_id");
                sessionStorage.setItem("token", data.token); // Store token in sessionStorage (expires on tab close)
            }

            navigate(ENDPOINTS.DASHBOARD);
        } catch (error) {
            setError(error.response?.data?.message || "Invalid Employee ID or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen w-full flex">
            {/* Left Section - Sign In Form */}
            <div className="w-2/3 flex justify-center items-center bg-white p-12">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Sign In</h2>
                    <p className="text-gray-600 text-center mb-6">
                        Enter the information you entered while registering.
                    </p>

                    {/* Show Error Message */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    {/* Sign In Form */}
                    <form className="space-y-4" onSubmit={handleSignIn}>
                        <div>
                            <label className="block text-gray-700 font-medium">Employee ID</label>
                            <input 
                                type="text" 
                                name="employee_id" 
                                placeholder="Employee ID" 
                                value={credentials.employee_id} 
                                onChange={handleChange} 
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-deepGreen" 
                                required 
                            />
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
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex justify-between items-center text-sm">
                            <label className="flex items-center text-gray-700">
                                <input 
                                    type="checkbox" 
                                    checked={rememberMe} 
                                    onChange={() => setRememberMe(!rememberMe)} 
                                    className="mr-2 text-deepGreen" 
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-deepGreen font-semibold hover:underline">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full bg-[#1B5E3A] text-white py-3 rounded-md font-semibold hover:bg-[#2E7D5C] flex items-center justify-center" disabled={loading}>
                            {loading ? <PulseLoader color="#fff" size={8} /> : "Sign In"}
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
                        Don’t have an account? <a href={ENDPOINTS.SIGN_UP} className="font-bold text-black hover:underline">Create</a>
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
                    <button className="mt-6 bg-[#1B5E3A] px-6 py-2 rounded-md text-white font-semibold hover:bg-[#2E7D5C]" onClick={() => navigate(ENDPOINTS.SIGN_UP)}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
