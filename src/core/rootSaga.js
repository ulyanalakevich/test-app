import { all } from 'redux-saga/effects';
import { loginSaga } from '../features/SingIn/authSaga';
import { catalogSaga } from '../features/Catalog/catalogSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    catalogSaga(),
  ]);
}