export default function ArticleBanner({ title, children }) {
  return (
    <div className="banner">
      <div className="container">
        <h1>{title}</h1>

        <div className="article-meta">{children}</div>
      </div>
    </div>
  );
}
