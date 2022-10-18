import { useCurrentUser } from "context/context";
import instance from "api/instance";
import { useNavigate } from "react-router-dom";
import { useLoginDispatch } from "context/context";

export default function useApi() {
  const navigate = useNavigate();
  const dispatch = useLoginDispatch();

  const user = useCurrentUser();
  const headers =
    user.username !== ""
      ? {
          Authorization: `Bearer ${user.token}`,
        }
      : null;

  const login = async (data, setError) => {
    try {
      const res = await instance({
        method: "post",
        url: "/users/login",
        data: {
          user: {
            ...data,
          },
        },
      });
      dispatch({ type: "login", payload: res.data.user });
      setError(false);
      navigate("/");
    } catch (e) {
      setError(true);
    }
  };

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
  const getArticle = async (setState, slug) => {
    try {
      const res = await instance({
        method: "get",
        headers,
        url: `/articles/${slug}`,
      });
      setState(res.data.article);
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

  return { favoriteFollow, getArticles, getArticle, login, user };
}
