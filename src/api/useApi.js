import { useCurrentUser } from "context/context";
import instance from "api/instance";
import { useNavigate } from "react-router-dom";

export default function useApi() {
  const navigate = useNavigate();

  const user = useCurrentUser();
  const headers =
    user.username !== ""
      ? {
          Authorization: `Bearer ${user.token}`,
        }
      : null;

  const getArticles = async setState => {
    try {
      const res = await instance({
        method: "get",
        headers,
        url: "/articles",
      });
      setState(res.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  const favoriteFollow = async (item, type, remove) => {
    try {
      user.username === ""
        ? navigate("/login")
        : await instance({
            method: `${remove ? "delete" : "post"}`,
            headers,
            url: `/${type}/${item}/${type === "profiles" ? "follow" : "favorite"}`,
          });
    } catch (e) {
      console.log(e);
    }
  };
  return { favoriteFollow, getArticles, user };
}
