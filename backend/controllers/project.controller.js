import { Project } from "../models/Project.model.js";

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: "Error fetching projects", error });
    }
}   

export const addProject = async (req, res) => { 
    try {
        const { title, description, tech, github, demo, category } = req.body;
        const newProject = new Project({ title, description, tech, github, demo, category });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: "Error adding project", error });
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Project.findByIdAndDelete(id);
        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting project", error });
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, tech, github, demo, category } = req.body;
        const updatedProject = await Project.findByIdAndUpdate(id, { title, description, tech, github, demo, category }, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: "Error updating project", error });
    }
}