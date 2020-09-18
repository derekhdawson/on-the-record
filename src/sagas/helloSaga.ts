import { takeEvery } from 'redux-saga/effects';
import { SET_HELLO } from '../actions/helloActions';

function* setHello() {
  console.log('set hello');
}

export function* watchHelloSaga() {
  console.log('hello from saga');
  yield takeEvery(SET_HELLO, setHello);
}
