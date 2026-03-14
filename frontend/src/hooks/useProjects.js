import { useCallback, useEffect, useState } from "react";
import { getProjects, createProject, updateProject, deleteProject } from "../services/project.service";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProjects = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const list = await getProjects();
            setProjects(Array.isArray(list) ? list : []);
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Failed to fetch projects");
        } finally {
            setLoading(false);
        }
    }, []);

    const addProject = useCallback(async (payload) => {
        setLoading(true);
        setError(null);
        try {
            const data = await createProject(payload);
            setProjects((prev) => [...prev, data]);
            return data;
        } catch (err) {
            const message = err?.response?.data?.message || err.message || "Failed to create project";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const editProject = useCallback(async (id, payload) => {
        setLoading(true);
        setError(null);
        try {
            const data = await updateProject(id, payload);
            setProjects((prev) => prev.map((p) => (p?._id === id ? { ...p, ...data } : p)));
            return data;
        } catch (err) {
            const message = err?.response?.data?.message || err.message || "Failed to update project";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const removeProject = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            await deleteProject(id);
            setProjects((prev) => prev.filter((p) => p?._id !== id));
        } catch (err) {
            const message = err?.response?.data?.message || err.message || "Failed to delete project";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    return { projects, loading, error, fetchProjects, addProject, editProject, removeProject };
};
