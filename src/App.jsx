import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import { ENDPOINTS } from "./config";

const App = () => {
    const PrivateRoute = ({ children }) => {
        return localStorage.getItem("token") ? children : <Navigate to="/signin" />;
      };
    return (
        <Router>
            <Routes>
                <Route path={ENDPOINTS.ROOT} element={<LandingPage />} />
                <Route path={ENDPOINTS.DASHBOARD} element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path={ENDPOINTS.SIGN_UP} element={<SignupPage />} />
                <Route path={ENDPOINTS.SIGN_IN} element={<SignInPage />} />
            </Routes>
        </Router>
    );
};

export default App;
