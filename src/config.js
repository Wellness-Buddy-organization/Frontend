const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const API_URLS = {
    SIGN_UP: `${BASE_URL}/api/users/sign-up`,
    SIGN_IN: `${BASE_URL}/api/users/sign-in`,
};

const ENDPOINTS = {
    ROOT: "/",
    DASHBOARD: "/dashboard",
    SIGN_UP: "/sign-up",
    SIGN_IN: "/sign-in",
};

export { API_URLS, ENDPOINTS };
