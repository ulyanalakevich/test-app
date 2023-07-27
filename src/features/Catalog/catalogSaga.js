import { put, takeLatest, call } from "redux-saga/effects";
import {
  fetchNationsSuccess,
  fetchNationsError,
  fetchNations,
} from "./catalogSlice";
import { getNations } from "./catalogApi";

function* fetchNationsHandler() {
  try {
    const nations = yield call(getNations);
    yield put(fetchNationsSuccess(nations.slice(0, 100)));
  } catch (error) {
    yield put(fetchNationsError());
  }
}

export function* catalogSaga() {
  yield takeLatest(fetchNations.type, fetchNationsHandler);
}
