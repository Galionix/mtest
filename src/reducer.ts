import { Reducer, combineReducers } from "redux";

import newsReducer from "./features/news/news.reducer";
import { AppAction, AppState } from "./store";

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer;
