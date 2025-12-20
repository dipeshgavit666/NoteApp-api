import express from "express";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express()


app.post("/notes", async(req, res) => {
    const note = req.body;

    if(!note.title && !note.description){
        return res.status(400).json({
            success: false,
            message: "please provide all fileds"
        })
    }

    try {
        const newNote = await note.save();
        res.status(200).json({
            success: true,
            data: newNote
        })
    } catch (error) {
        console.error("error in creating new Note", message.error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
});

app.listen(5000, () => {
    connectDB()
    console.log(`server is running on port 5000`);
});
