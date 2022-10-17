import { Link } from "react-router-dom";
import moment from "moment";

export default function ArticleAuthor({ author, date, img }) {
  const defaultUrl = "https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
  return (
    <>
      <Link to={`/profile/${author}`}>
        <img src={img === "" ? defaultUrl : img} />
      </Link>
      <div className="info">
        <Link to={`/profile/${author}`} className="author">
          {author}
        </Link>
        <span className="date">{moment(date).format("MMMM Do")}</span>
      </div>
    </>
  );
}
