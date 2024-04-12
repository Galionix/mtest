import {
  FETCH_NEWS,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS,
  SET_FILTER,
  SET_VIEW_INDEX,
} from "./action.types";
import { AnyNewsAction } from "./actions";
import { initialState } from "./constants";
import { News } from "./news.types";

export default function newsReducer(
  state = initialState,
  action: AnyNewsAction
) {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, status: "loading" };

    case FETCH_NEWS_SUCCESS:
      if ("payload" in action)
        return { ...state, status: "success", news: action.payload as News[] };
      return state;

    case FETCH_NEWS_FAILURE:
      return { ...state, status: "error" };

    case SET_VIEW_INDEX:
      if ("payload" in action)
        return { ...state, viewId: action.payload as number };
      return state;

    case SET_FILTER:
      if ("payload" in action)
        return { ...state, filter: action.payload as string };
      return state;
    default:
      return state;
  }
}
