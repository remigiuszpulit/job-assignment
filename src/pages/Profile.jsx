import ArticlePreview from "components/ArticlePreview";
import FeedToggle from "components/FeedToggle";
import PageLayout from "components/PageLayout";
import ProfileBanner from "components/ProfileBanner";

export default function Profile() {
  return (
    <PageLayout>
      <div className="profile-page">
        <ProfileBanner />
        {/* my articles & favorited articles */}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <FeedToggle />
              <ArticlePreview />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}