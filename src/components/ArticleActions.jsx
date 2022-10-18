import ArticleAuthor from "components/ArticleAuthor";
import FavoriteFollowBtn from "components/FavoriteFollowBtn";
export default function ArticleActions({ author, date, slug, favorited, favoritesCount, update }) {
  return (
    <>
      <ArticleAuthor author={author.username} date={date} img={author.image} />
      <FavoriteFollowBtn
        item={author.username}
        type={"profiles"}
        isChecked={author.following}
        update={update}
        count={10}
      />
      &nbsp;&nbsp;
      <FavoriteFollowBtn item={slug} type={"articles"} isChecked={favorited} update={update} count={favoritesCount} />
    </>
  );
}
