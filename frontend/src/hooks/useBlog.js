import { useCallback, useEffect, useState } from "react";
import { getBlogs, createBlog } from "../services/blog.service";

export const useBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBlogs = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getBlogs();
            setBlogs(Array.isArray(data) ? data : data?.blogs || []);
        } catch (err) {
            setError(err?.response?.data?.message || err.message || "Failed to fetch blogs");
        } finally {
            setLoading(false);
        }
    }, []);

    const addBlog = useCallback(async (payload) => {
        setLoading(true);
        setError(null);
        try {
            const data = await createBlog(payload);
            setBlogs((prev) => [...prev, data]);
            return data;
        } catch (err) {
            const message = err?.response?.data?.message || err.message || "Failed to create blog";
            setError(message);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    return {
        blogs,
        loading,
        error,
        fetchBlogs,
        addBlog,
    };
};
