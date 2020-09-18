import { all, fork } from 'redux-saga/effects';
import { watchHelloSaga } from './helloSaga';

export default function* rootSaga() {
  yield all([fork(watchHelloSaga)]);
}
