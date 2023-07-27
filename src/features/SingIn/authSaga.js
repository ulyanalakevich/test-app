import { takeLatest, call, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "./authSlice";
import { loginAPI } from "./authApi";

function* fetchLoginHandler(action) {
  try {
    const token = yield call(loginAPI, action.payload.username, action.payload.password);
    yield put(loginSuccess(token));
  } catch (error) {
    yield put(loginFailure(error.toString()));
  }
}

export function* loginSaga() {
  yield takeLatest(loginRequest.type, fetchLoginHandler);
}