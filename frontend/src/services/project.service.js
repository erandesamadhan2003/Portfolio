import { api, API_URL } from "./api";

const normalizeProjects = (payload) => {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.projects)) return payload.projects;
    return [];
};

export const getProjects = async () => {
    const { data } = await api.get(API_URL.PROJECTS);
    return normalizeProjects(data);
};

export const createProject = async (payload) => {
    const { data } = await api.post(API_URL.PROJECTS, payload);
    return data;
};

export const updateProject = async (id, payload) => {
    const { data } = await api.put(API_URL.PROJECT_BY_ID(id), payload);
    return data;
};

export const deleteProject = async (id) => {
    const { data } = await api.delete(API_URL.PROJECT_BY_ID(id));
    return data;
};
