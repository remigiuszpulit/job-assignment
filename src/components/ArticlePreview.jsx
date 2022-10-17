import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ArticlePreview({ user, author, date, title, desc, favoritesCount, slug, favorite, favorited }) {
  const navigate = useNavigate();
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/profile/${author}`}>
          <img src="http://i.imgur.com/Qr71crq.jpg" />
        </Link>
        <div className="info">
          <Link to={`/profile/${author}`} className="author">
            {author}
          </Link>
          <span className="date">{date}</span>
        </div>
        {user !== undefined && (
          <button
            onClick={
              user.username !== ""
                ? favorited
                  ? () => favorite(slug, true)
                  : () => favorite(slug, false)
                : () => navigate("/login")
            }
            className={`btn btn-outline-primary btn-sm pull-xs-right ${
              user.username !== "" && favorited ? "active" : null
            }`}
          >
            <i className="ion-heart" /> {favoritesCount}
          </button>
        )}
      </div>
      <Link to={`/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}
