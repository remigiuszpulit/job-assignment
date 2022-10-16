import ArticleActions from "components/ArticleActions";
import ArticleBanner from "components/ArticleBanner";
import ArticleContent from "components/ArticleContent";
import CommentsSection from "components/CommentsSection";
import PageLayout from "components/PageLayout";

export default function Article() {
  return (
    <PageLayout>
      <div className="article-page">
        <ArticleBanner />

        <div className="container page">
          <ArticleContent />

          <hr />
          <ArticleActions />
          <CommentsSection />
        </div>
      </div>
    </PageLayout>
  );
}
