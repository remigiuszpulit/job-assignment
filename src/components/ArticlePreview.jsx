import { Link } from "react-router-dom";
import ArticleAuthor from "./ArticleAuthor";
import FavoriteFollowBtn from "./FavoriteFollowBtn";

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
        <FavoriteFollowBtn
          item={slug}
          type={"articles"}
          isChecked={favorited}
          update={updateList}
          count={favoritesCount}
          noText
        />
      </div>
      <Link to={`/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}
