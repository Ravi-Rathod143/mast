import { useEffect, useState } from "react";
import api from "../api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get("/articles")
      .then(res => setArticles(res.data))
      .catch(() => setError("Backend API not reachable"));
  }, []);

  if (error)
    return <div className="center-text error">{error}</div>;

  if (!articles.length)
    return <div className="center-text">No articles found</div>;

  return (
    <div className="grid">
      {articles.map(a => (
        <div className="card" key={a._id}>
          <h3>{a.title}</h3>
          <p>{a.content || "Content not available"}</p>

          {a.rewrittenContent && (
            <span className="badge">AI Updated</span>
          )}
        </div>
      ))}
    </div>
  );
}
