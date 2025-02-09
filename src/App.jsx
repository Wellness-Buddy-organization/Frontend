import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "../components/UserList"
import Dashboard from "../pages/Dashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
