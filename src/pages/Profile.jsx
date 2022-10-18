import ArticlePreview from "components/ArticlePreview";
// import FeedToggle from "components/FeedToggle";
import ProfileBanner from "components/ProfileBanner";
import FavoriteFollowBtn from "components/FavoriteFollowBtn";
import FeedToggle from "components/FeedToggle";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "api/useApi";

export default function Profile() {
  /* my articles & favorited articles */
  const [authorData, setAuthorData] = useState(undefined);
  const [tab, setTab] = useState("my");
  const [articles, setArticles] = useState([]);

  const { getArticles, getSingleItem } = useApi();
  const username = useParams().username;
  const tabs = [
    { value: "my", name: "My articles" },
    { value: "favorited", name: "Favorited by me" },
  ];
  useEffect(() => {
    getSingleItem(setAuthorData, "profiles", username);
  }, []);
  useEffect(() => {
    if (authorData !== undefined) {
      tab === "my"
        ? getArticles(setArticles, false, authorData.username)
        : getArticles(setArticles, false, undefined, authorData.username);
    }
  }, [authorData, tab]);
  return (
    <>
      <div className="profile-page">
        {console.log(authorData)}
        {authorData && (
          <>
            <ProfileBanner username={authorData.username} bio={authorData.bio} img={authorData.image}>
              <FavoriteFollowBtn
                item={authorData.username}
                type={"profiles"}
                isChecked={authorData.following}
                update={() => getSingleItem(setAuthorData, "profiles", username)}
                count={10}
              />
            </ProfileBanner>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-10 offset-md-1">
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
                        updateList={() => {
                          tab === "my"
                            ? getArticles(setArticles, false, authorData.username, undefined)
                            : getArticles(setArticles, false, undefined, authorData.username);
                        }}
                      />
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
