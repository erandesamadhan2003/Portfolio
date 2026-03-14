import express from "express"
import { sendMessage } from "../controllers/contract.controller.js"


const router = express.Router()

router.post('/contact', sendMessage)

export { router as contactRouter }