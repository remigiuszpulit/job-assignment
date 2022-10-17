import { useCurrentUser } from "context/context";
import instance from "api/instance";
import { useState } from "react";

export default function useGetArticles() {
  const [articles, setArticles] = useState([]);

  const user = useCurrentUser();
  const headers =
    user.username !== ""
      ? {
          Authorization: `Bearer ${user.token}`,
        }
      : null;

  const getArticles = async () => {
    try {
      const res = await instance({
        method: "get",
        headers,
        url: "/articles",
      });
      setArticles(res.data.articles);
    } catch (e) {
      console.log(e);
    }
  };

  const favorite = async (slug, remove) => {
    try {
      await instance({
        method: `${remove ? "delete" : "post"}`,
        headers,
        url: `/articles/${slug}/favorite`,
      });
      getArticles();
    } catch (e) {
      console.log(e);
    }
  };
  return [getArticles, favorite, articles, user];
}
