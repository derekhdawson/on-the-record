import { all, fork } from 'redux-saga/effects';
import { watchRecordSaga } from './recordSaga';

export default function* rootSaga() {
  yield all([fork(watchRecordSaga)]);
}
