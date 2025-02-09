import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/sign-up" element={<SignupPage />} />
                <Route path="/sign-in" element={<SignInPage />} />
            </Routes>
        </Router>
    );
};

export default App;
