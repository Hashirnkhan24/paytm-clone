import dotenv from "dotenv";
import express from "express";
import connectDB from "./database/db.js";
import cors from 'cors';
import rootRouter from "./routes/index.js";
import { JWT_SECRET } from "./config.js";

const app = express();
dotenv.config()
app.use(cors());
app.use(express.json())
app.use('/api/v1', rootRouter)

connectDB()
.then(() => {
    app.on("ERROR", (error) => {
        console.error("ERROR" + error);
        throw error
    })
    app.listen(process.env.PORT || 3000, () => {
        console.log("listening on port " + process.env.PORT)
    })
})
.catch((error) => {
    console.log("MONGODB connecttion failed: " + error)
})
