import ArticlePreview from "components/ArticlePreview";
import Banner from "components/Banner";
import FeedToggle from "components/FeedToggle";
import PageLayout from "components/PageLayout";
import TagsContainer from "components/TagsContainer";

export default function ArticleList() {
  return (
    <PageLayout>
      <div className="home-page">
        <Banner />

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggle />
              <ArticlePreview />
              <ArticlePreview />
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
