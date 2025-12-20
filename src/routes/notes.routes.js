import { Router } from "express";
//import controller
import { createNote } from "../controllers/notes.controller.js";

const router = Router()

router.route("/createnote").post(createNote);

export default router