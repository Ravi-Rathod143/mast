import Article from "../models/Article.js";
export const getArticles = async (req, res) => res.json(await Article.find());
export const createArticle = async (req, res) =>
  res.json(await Article.create(req.body));
export const updateArticle = async (req, res) =>
  res.json(
    await Article.findByIdAndUpdate(req.params.id, req.body, { new: true })
  );    
