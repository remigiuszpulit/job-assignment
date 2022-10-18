import { useCurrentUser } from "context/context";
import { useNavigate } from "react-router-dom";
import { useLoginDispatch } from "context/context";
import axios from "axios";

export default function useApi() {
  const instance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 1000,
  });

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

  const getArticles = async (setState, myFeed, author, favoritedBy) => {
    try {
      const res = await instance({
        method: "get",
        headers,
        url: `/articles${myFeed === true ? "/feed" : "/"}`,
        params: {
          author,
          favorited: favoritedBy,
        },
      });
      setState(res.data.articles);
    } catch (e) {
      console.log(e);
    }
  };
  const getSingleItem = async (setState, endpoint, slug) => {
    try {
      const res = await instance({
        method: "get",
        headers,
        url: `/${endpoint}/${slug}`,
      });
      endpoint === "articles" ? setState(res.data.article) : setState(res.data.profile);
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

  return { favoriteFollow, getArticles, getSingleItem, login, user };
}
