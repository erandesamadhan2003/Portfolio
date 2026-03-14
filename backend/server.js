import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { projectRouter } from './routes/project.routes.js';
import { blogRouter } from './routes/blog.routes.js';
import { contactRouter } from './routes/contact.routes.js';

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.get("/", (req, res) => res.json({ message: 'Portfolio API' }));

// mount once at /api, each router already has /projects /blogs /contact paths
app.use("/api", projectRouter);
app.use("/api", blogRouter);
app.use("/api", contactRouter);

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});