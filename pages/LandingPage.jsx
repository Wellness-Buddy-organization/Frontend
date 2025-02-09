import React from "react";
import { FaUsers, FaBuilding, FaBell } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineAlarm, MdPsychology, MdWorkOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="h-screen w-full flex flex-col relative bg-[#A8D5BA]/80">
                {/* Background Image with Overlay */}
                {/* <div className="absolute inset-0 bg-[url('../assets/landing.png')] bg-cover bg-center opacity-30"></div> */}

                {/* Header Top Bar */}
                <div className="relative flex justify-between items-center">
                    {/* Logo */}
                    <img src="../assets/logo.png" alt="Wellness Buddy" className="w-32 h-auto" />

                    {/* Register & Sign In Buttons */}
                    <div className="flex gap-4 mb-10 pr-6">
                        <button className="bg-[#1B5E3A] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#2E7D5C]" onClick={() => navigate("/sign-up")}>
                            Register
                        </button>
                        <button className="border border-[#1B5E3A] text-[#1B5E3A] px-6 py-2 rounded-md font-semibold hover:bg-[#A8D5BA]" onClick={() => navigate("/sign-in")}>
                            Sign In
                        </button>
                    </div>
                </div>

                {/* Content (Emphasized) */}
                <div className="relative flex flex-col flex-grow">
                    {/* Header Section - Takes Remaining Height */}
                    <header className="flex-grow flex items-center justify-center py-16 px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl font-extrabold text-gray-900 max-w-lg mx-auto">
                                Empowering <span className="text-[#1B5E3A]">Your Wellness</span> Every Day!
                            </h1>
                            <p className="mt-4 text-lg text-gray-700 font-bold">
                                Wellness Buddy helps individuals prioritize well-being with daily tracking,
                                smart reminders, and mental health support, fostering balance in life.
                            </p>
                        </div>
                    </header>

                    {/* Statistics Section - Fixed Height */}
                    <section className="flex justify-center gap-6 py-10 relative">
                        <StatCard icon={<FaUsers />} title="5000+" subtitle="Happy Users" />
                        <StatCard icon={<FaBuilding />} title="15+" subtitle="Guided Programs" />
                        <StatCard icon={<FaBell />} title="200+" subtitle="Daily Reminders Sent" />
                    </section>
                </div>
            </div>

            <div className="h-screen w-full flex flex-col relative">
                {/* Key Features */}
                <section className="bg-[#6BBF8A] py-32 px-6 text-center text-white">
                    <h2 className="text-3xl font-bold">Key Features</h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        <FeatureCard icon={<MdHealthAndSafety />} title="Wellness Tracking" description="Track and analyze mood, stress, sleep, and work hours with insights." />
                        <FeatureCard icon={<MdOutlineAlarm />} title="Reminders" description="Manage self-care tasks with meal, water, and break alerts." />
                        <FeatureCard icon={<MdPsychology />} title="Mental Health Support" description="Access meditation, breathing exercises, and help resources." />
                        <FeatureCard icon={<MdWorkOutline />} title="Work-life Balance" description="Optimize work hours and celebrate achievements effortlessly." />
                    </div>
                </section>
                {/* Call to Action */}
                <section className="text-center py-12">
                    <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
                    <div className="mt-6 flex justify-center gap-4">
                        <button className="bg-[#1B5E3A] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#2E7D5C]" onClick={()=>navigate('sign-up')}>Register</button>
                        <button className="border border-[#1B5E3A] text-[#1B5E3A] px-6 py-2 rounded-md font-semibold hover:bg-[#A8D5BA]" onClick={()=>navigate('sign-in')}>Sign In</button>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-200 text-center py-6">
                <div className="flex justify-center gap-4 text-gray-700 font-medium">
                    <span>Wellness Tracking</span>
                    <span>Work-life Balance</span>
                    <span className="font-bold">Wellness Buddy</span>
                    <span>Mental Health Support</span>
                    <span>Reminders</span>
                </div>
                <p className="text-sm mt-2">© 2025 Wellness Buddy | All Rights Reserved</p>
            </footer>
        </div>
    );
};

// Reusable Card Components
const StatCard = ({ icon, title, subtitle }) => (
    <div className="flex flex-col items-center bg-white shadow-md p-4 rounded-md w-48">
        <div className="text-3xl text-[#1B5E3A]">{icon}</div>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
);

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-gray-900 flex flex-col items-center">
        <div className="text-4xl text-[#1B5E3A]">{icon}</div>
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="mt-2 text-sm text-center">{description}</p>
    </div>
);

export default LandingPage;
