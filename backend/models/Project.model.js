import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tech: [String],
    github: String,
    demo: String,
    category: String
})

export const Project = mongoose.model("Project", projectSchema)