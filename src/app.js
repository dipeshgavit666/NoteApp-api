import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express()

app.use(express.json({limit:"16kb"}));
app.use(urlencoded({extended: true, limit:"16kb"}));
app.use(express.static("public"));

//cors config
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173" || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedheaders: ["Content-Type", "Authorization"]
}));


//import routs
import notesRouter from "./routes/notes.routes.js";

app.use("/api/v1/notes", notesRouter);


export default app;