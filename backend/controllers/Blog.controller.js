import { Blog } from "../models/Blog.model.js"

export const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs", error });
    }
}

export const addBlog = async (req, res) => {
    try {
        const { title, content, date } = req.body;
        const newBlog = new Blog({ title, content, date });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: "Error adding blog", error });
    }
}
