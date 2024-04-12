import { Dispatch } from "react";
import { AnyNewsAction, setViewIndex } from "./actions";
import { News } from "./news.types";

type PickedNewsData = Pick<News, "title" | "id">;

export const getNewsTitlesElements = (
  news: PickedNewsData[],
  dispatch: Dispatch<AnyNewsAction>
) => {
  return news.map((article) => (
    <button
      onClick={() => {
        dispatch(setViewIndex(article.id));
      }}
      key={article.id}
    >
      {article.title}
    </button>
  ));
};
