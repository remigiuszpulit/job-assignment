import ArticleBanner from "components/ArticleBanner";
import ArticleContent from "components/ArticleContent";
import CommentsSection from "components/CommentsSection";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "api/useApi";
import ArticleActions from "components/ArticleActions";

export default function Article() {
  const [articleData, setArticleData] = useState(undefined);
  const { getSingleItem } = useApi();
  const slug = useParams().slug;

  useEffect(() => {
    getSingleItem(setArticleData, "articles", slug);
  }, []);

  return (
    <>
      {articleData && (
        <div className="article-page">
          <ArticleBanner title={articleData.title}>
            <ArticleActions
              author={articleData.author}
              date={articleData.date}
              slug={slug}
              favorited={articleData.favorited}
              favoritesCount={articleData.favoritesCount}
              update={() => getSingleItem(setArticleData, "articles", slug)}
            />
          </ArticleBanner>

          <div className="container page">
            <ArticleContent desc={articleData.description} title={articleData.title} body={articleData.body} />

            <hr />
            <div className="article-actions">
              <div className="article-meta">
                <ArticleActions
                  author={articleData.author}
                  date={articleData.date}
                  slug={slug}
                  favorited={articleData.favorited}
                  favoritesCount={articleData.favoritesCount}
                  update={() => getSingleItem(setArticleData, "articles", slug)}
                />
              </div>
            </div>
            <CommentsSection />
          </div>
        </div>
      )}
    </>
  );
}
