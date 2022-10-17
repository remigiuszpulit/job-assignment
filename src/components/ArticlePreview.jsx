import { Link } from "react-router-dom";
import ArticleAuthor from "./ArticleAuthor";
import FavoriteBtn from "./FavoriteBtn";

export default function ArticlePreview({
  author,
  authorImg,
  date,
  title,
  desc,
  favoritesCount,
  slug,

  favorited,
  updateList,
}) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <ArticleAuthor author={author} date={date} img={authorImg} />
        <FavoriteBtn item={slug} type={"articles"} isChecked={favorited} update={updateList} count={favoritesCount} />
      </div>
      <Link to={`/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}
