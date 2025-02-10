import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { API_URLS } from "../src/config";
import { FaBell, FaBrain, FaBriefcase, FaSmile } from "react-icons/fa";

function Dashboard() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const { data } = await axios.get(API_URLS.DASHBOARD, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setData(data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 bg-white p-6 ml-64"> {/* Added ml-64 to shift content */}
                <h2 className="text-3xl font-bold mb-6">Wellness Dashboard</h2>

                {/* Wellness Tracking */}
                <section className="mb-6 bg-green-100 p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold flex items-center"><FaSmile className="mr-2" /> Wellness Tracking</h3>
                    <p>Mood Level: {data.wellness?.mood}</p>
                    <p>Stress Level: {data.wellness?.stress}</p>
                    <p>Sleep Hours: {data.wellness?.sleep}</p>
                    <p>Work Hours: {data.wellness?.workHours}</p>
                    <p>Breaks Taken: {data.wellness?.breaks}</p>
                </section>

                {/* Smart Reminder System */}
                <section className="mb-6 bg-blue-100 p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold flex items-center"><FaBell className="mr-2" /> Smart Reminders</h3>
                    <p>Meal Reminder: {data.reminders?.meal}</p>
                    <p>Water Intake Reminder: {data.reminders?.water}</p>
                    <p>Eye Rest Reminder: {data.reminders?.eyeRest}</p>
                    <p>Upcoming Personal Event: {data.reminders?.event}</p>
                </section>

                {/* Mental Health Support */}
                <section className="mb-6 bg-purple-100 p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold flex items-center"><FaBrain className="mr-2" /> Mental Health Support</h3>
                    <p>Guided Meditation: {data.mentalHealth?.meditation ? "Available" : "Not Available"}</p>
                    <p>Breathing Exercises: {data.mentalHealth?.breathing ? "Available" : "Not Available"}</p>
                    <p>Relaxation Techniques: {data.mentalHealth?.relaxation ? "Available" : "Not Available"}</p>
                    <p>Professional Help Resources: {data.mentalHealth?.helpResources ? "Accessible" : "Not Accessible"}</p>
                </section>

                {/* Work-Life Balance */}
                <section className="mb-6 bg-yellow-100 p-4 rounded-md shadow-md">
                    <h3 className="text-xl font-semibold flex items-center"><FaBriefcase className="mr-2" /> Work-Life Balance</h3>
                    <p>Work Hours Analytics: {data.workLifeBalance?.analytics}</p>
                    <p>Family Time Planning: {data.workLifeBalance?.familyTime}</p>
                    <p>Achievements Celebrated: {data.workLifeBalance?.achievements}</p>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
