import { Router } from "express";
//import controller
import { 
    createNote, 
    deleteNote,
    getAllNotes,
    updateNote
 } from "../controllers/notes.controller.js";

const router = Router()

router.route("/createnote").post(createNote);
router.route("/deletenote/:id").delete(deleteNote);
router.route("/updatenote/:id").patch(updateNote);
router.route("/allnotes").get(getAllNotes);

export default router