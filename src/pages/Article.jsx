import ArticleBanner from "components/ArticleBanner";
import ArticleContent from "components/ArticleContent";
import CommentsSection from "components/CommentsSection";
import PageLayout from "components/PageLayout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCurrentUser } from "context/context";
import instance from "api/instance";

export default function Article() {
  const [articleData, setArticleData] = useState(undefined);

  const slug = useParams().slug;
  console.log(slug);

  const user = useCurrentUser();
  const headers =
    user.username !== ""
      ? {
          Authorization: `Bearer ${user.token}`,
        }
      : null;
  const getArticle = async () => {
    try {
      const res = await instance({
        method: "get",
        headers,
        url: `/articles/${slug}`,
      });
      setArticleData(res.data.article);

      console.log(res.data);
      console.log(articleData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <PageLayout>
      {articleData && (
        <div className="article-page">
          <ArticleBanner
            title={articleData.title}
            date={articleData.createdAt}
            favoritesCount={articleData.favoritesCount}
            author={articleData.author}
          />

          <div className="container page">
            <ArticleContent desc={articleData.description} title={articleData.title} body={articleData.body} />

            <hr />

            <div className="article-actions">
              <div className="article-meta">
                <a href="/#/profile/ericsimmons">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a href="/#/profile/ericsimmons" className="author">
                    {articleData.author.username}
                  </a>
                  <span className="date">{articleData.createdAt}</span>
                </div>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-plus-round" />
                  &nbsp; {`Follow ${articleData.author.username}`}
                </button>
                &nbsp;
                <button className="btn btn-sm btn-outline-primary">
                  <i className="ion-heart" />
                  &nbsp; Favorite Post <span className="counter">({articleData.favoritesCount})</span>
                </button>
              </div>
            </div>
            <CommentsSection />
          </div>
        </div>
      )}
    </PageLayout>
  );
}
