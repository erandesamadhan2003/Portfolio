import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const API_URL = {
    PROJECTS: "/projects",
    PROJECT_BY_ID: (id) => `/projects/${id}`,
    BLOGS: "/blogs",
    CONTACT: "/contact",
};

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

