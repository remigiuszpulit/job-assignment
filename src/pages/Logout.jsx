import PageLayout from "components/PageLayout";
import Banner from "components/Banner";

export default function Logout() {
  return (
    <PageLayout>
      <div className="home-page">
        <Banner />

        <div className="container page">You have been successfully logged out</div>
      </div>
    </PageLayout>
  );
}
