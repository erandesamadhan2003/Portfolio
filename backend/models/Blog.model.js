import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    date: Date
})

export const Blog = mongoose.model("Blog", blogSchema)