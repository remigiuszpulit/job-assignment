import useApi from "api/useApi";

export default function FavoriteFollowBtn({ item, type, isChecked = false, update, count, noText }) {
  const { favoriteFollow } = useApi();
  return (
    <button
      onClick={() => {
        favoriteFollow(item, type, isChecked);
        update();
      }}
      className={`btn btn-outline-${type === "articles" ? "primary" : "secondary"} btn-sm ${
        noText && "pull-xs-right"
      } ${isChecked ? "active" : null}`}
    >
      <i className="ion-heart" />{" "}
      {!noText && <span>&nbsp; {type === "profiles" ? `Follow ${item}` : "Favorite Post"}</span>}
      <span className="counter">{count}</span>
    </button>
  );
}
