import Banner from "components/Banner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  });

  return (
    <>
      <div className="home-page">
        <Banner />

        <div className="container page">
          You have been successfully logged out, and will be shortly redirected to homepage
        </div>
      </div>
    </>
  );
}
