import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import articleRoutes from "./routes/articleRoutes.js";
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/articles", articleRoutes);
app.listen(5000, () => console.log("Server running on 5000"));

//ROkOleJiXGOichsI
//ravikantrathod143_db_user