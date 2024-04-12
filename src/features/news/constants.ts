import { NewsState } from "./news.types";

export const initialState: NewsState = {
  news: [],
  status: "idle",
  error: null,
  viewId: null,
  filter: null,
};
