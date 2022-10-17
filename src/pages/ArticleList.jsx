import ArticlePreview from "components/ArticlePreview";
import Banner from "components/Banner";
import FeedToggle from "components/FeedToggle";
import { useEffect } from "react";
import PageLayout from "components/PageLayout";
import TagsContainer from "components/TagsContainer";

import useArticlesListFacade from "facades/useArticlesListFacade";

export default function ArticleList() {
  const [getArticles, favorite, articles, user] = useArticlesListFacade();

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <PageLayout>
      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              {articles.map(article => (
                <ArticlePreview
                  user={user}
                  key={article.title}
                  favorited={article.favorited}
                  author={article.author.username}
                  title={article.title}
                  date={article.createdAt}
                  favoritesCount={article.favoritesCount}
                  desc={article.description}
                  slug={article.slug}
                  favorite={favorite}
                />
              ))}
            </div>

            <div className="col-md-3">
              <TagsContainer />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
