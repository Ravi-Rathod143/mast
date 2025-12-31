import ArticleList from "./components/ArticleList";

export default function App() {
  return (
    <>
      <header className="header">
        <h1>BeyondChats Articles</h1>
        <p>Original & AI-Updated Content</p>
      </header>

      <main className="container">
        <ArticleList />
      </main>
    </>
  );
}
