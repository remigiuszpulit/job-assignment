import useApi from "api/useApi";

export default function FavoriteBtn({ item, type, isChecked = false, update, count }) {
  const { favoriteFollow } = useApi();
  return (
    <button
      onClick={() => {
        favoriteFollow(item, type, isChecked);
        update();
      }}
      className={`btn btn-outline-primary btn-sm pull-xs-right ${isChecked ? "active" : null}`}
    >
      <i className="ion-heart" /> {count}
    </button>
  );
}
