import express from "express";
import {
    getProjects,
    addProject,
    updateProject,
    deleteProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.route("/projects").get(getProjects).post(addProject);
router.route("/projects/:id").put(updateProject).delete(deleteProject);

export { router as projectRouter };