import express from "express"
import { getBlogs, addBlog } from "../controllers/Blog.controller.js"

const router = express.Router()

router.route("/blogs").get(getBlogs).post(addBlog)

export { router as blogRouter }