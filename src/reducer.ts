import { combineReducers } from "redux";

import newsReducer from "./features/news/news.reducer";

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
