import { AppState } from "../../store";
import { createSelector } from "reselect";

export const selectRoot = (state: AppState) => state.news;

export const selectNews = createSelector(selectRoot, (state) => state.news);

export const selectStatus = createSelector(selectRoot, (state) => state.status);

export const selectViewedArticle = createSelector(selectRoot, (state) =>
  state.news.find((article) => article.id === state.viewId)
);

export const selectFilteredNews = createSelector(selectRoot, (state) =>
  state.filter
    ? state.news.filter((article) =>
        //   @ts-ignore ts is not able to infer that title is not null
        article.title?.toLowerCase().includes(state.filter?.toLowerCase())
      )
    : state.news
);
