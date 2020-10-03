import { takeEvery } from 'redux-saga/effects';
import { SET_RECORDING_STATE } from '../actions/recordActions';

function* setRecordingState() {
  console.log('set recording state');
}

export function* watchRecordSaga() {
  yield takeEvery(SET_RECORDING_STATE, setRecordingState);
}
