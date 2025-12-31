import mongoose from "mongoose";
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  sourceUrl: String,
  rewrittenContent: String,
  references: [String]
}, { timestamps: true });
export default mongoose.model("Article", articleSchema);