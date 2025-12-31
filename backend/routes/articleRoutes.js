import express from "express";
import { getArticles, createArticle, updateArticle } from "../controllers/articleController.js";
const router = express.Router();
router.get("/", getArticles);
router.post("/", createArticle);
router.put("/:id", updateArticle);
export default router;