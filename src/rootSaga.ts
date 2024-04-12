import { all } from "redux-saga/effects";
import { newsSagasArray } from "./features/news/sagas";

export default function* rootSaga() {
  yield all([
    ...newsSagasArray,
    // Add new sagas here as you create them
  ]);
}
