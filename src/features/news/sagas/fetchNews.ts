import { put, takeLatest, call } from "redux-saga/effects";
import { fetchNewsFailure, fetchNewsSuccess } from "../actions";
import { FETCH_NEWS } from "../action.types";
import { NewsResponse } from "../news.types";
import { fetchNewsFunction } from "../../../api/fetchNews";

export function* fetchNewsSaga() {
  try {
    const news: NewsResponse = yield call(fetchNewsFunction);
    yield put(fetchNewsSuccess(news.items));
  } catch (error) {
    yield put(fetchNewsFailure(error));
  }
}

export function* watchFetchNewsSaga() {
  yield takeLatest(FETCH_NEWS, fetchNewsSaga);
}
export default watchFetchNewsSaga;
