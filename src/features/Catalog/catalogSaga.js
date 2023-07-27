import { put, takeLatest, call } from "redux-saga/effects";
import {
  fetchUniversitiesSuccess,
  fetchUniversitiesError,
  fetchUniversities,
} from "./catalogSlice";
import { getUniversities } from "./catalogApi";

function* fetchUniversitiesHandler() {
  try {
    const universities = yield call(getUniversities);
    yield put(fetchUniversitiesSuccess(universities.slice(0, 100)));
  } catch (error) {
    yield put(fetchUniversitiesError());
  }
}

export function* catalogSaga() {
  yield takeLatest(fetchUniversities.type, fetchUniversitiesHandler);
}
