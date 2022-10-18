import ArticlePreview from "components/ArticlePreview";
import Banner from "components/Banner";
import FeedToggle from "components/FeedToggle";
import { useEffect, useState } from "react";
import TagsContainer from "components/TagsContainer";
import useApi from "api/useApi";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const { getArticles } = useApi();

  useEffect(() => {
    getArticles(setArticles);
  }, []);

  return (
    <>
      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              {articles.map(article => (
                <ArticlePreview
                  key={article.title}
                  favorited={article.favorited}
                  author={article.author.username}
                  authorImg={article.author.image}
                  title={article.title}
                  date={article.createdAt}
                  favoritesCount={article.favoritesCount}
                  desc={article.description}
                  slug={article.slug}
                  updateList={() => getArticles(setArticles)}
                />
              ))}
            </div>

            <div className="col-md-3">
              <TagsContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
