import ArticlePreview from "components/ArticlePreview";
import Banner from "components/Banner";
import FeedToggle from "components/FeedToggle";
import { useEffect, useState } from "react";
import TagsContainer from "components/TagsContainer";
import useApi from "api/useApi";

// TODO: implement pagination

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [tab, setTab] = useState("global");
  const { getArticles, user } = useApi();
  const tabs = [
    { value: "global", name: "Global Feed" },
    { value: "my", name: "My Feed", disabled: user.username === "" },
  ];
  useEffect(() => {
    tab === "my" ? getArticles(setArticles, true) : getArticles(setArticles);
  }, [tab]);

  return (
    <>
      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle options={tabs} active={tab} update={setTab} />
              {articles
                .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
                .map(article => (
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
