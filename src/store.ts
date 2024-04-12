import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { NewsState } from "./features/news/news.types";
import { initialState } from "./features/news/constants";

export type AppState = {
  news: NewsState;
};

const sagaMiddleware = createSagaMiddleware();
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(
  rootReducer,
  { news: initialState },
  composedEnhancer
);
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export default store;

sagaMiddleware.run(rootSaga);

export const useAppSelector = useSelector as <T>(
  selector: (state: AppState) => T
) => T;
