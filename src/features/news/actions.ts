import {
  FETCH_NEWS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS,
  SET_FILTER,
  SET_VIEW_INDEX,
} from "./action.types";
import { News } from "./news.types";

export const fetchNews = () => {
  return { type: FETCH_NEWS };
};

export const fetchNewsSuccess = (news: News[]) => {
  return { type: FETCH_NEWS_SUCCESS, payload: news };
};

export const fetchNewsFailure = (error: unknown) => {
  return { type: FETCH_NEWS_FAILURE, payload: error };
};
export const setViewIndex = (id: string) => {
  return { type: SET_VIEW_INDEX, payload: id };
};

export const setFilter = (filter: string) => {
  return { type: SET_FILTER, payload: filter };
};

export type AnyNewsAction = ReturnType<
  | typeof fetchNews
  | typeof fetchNewsSuccess
  | typeof fetchNewsFailure
  | typeof setViewIndex
>;
