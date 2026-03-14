import { api, API_URL } from "./api";

export const getBlogs = async () => {
    const { data } = await api.get(API_URL.BLOGS);
    return data;
};

export const createBlog = async (payload) => {
    const { data } = await api.post(API_URL.BLOGS, payload);
    return data;
};
