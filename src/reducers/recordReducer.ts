import {
  RecordAction,
  RecordingState,
  SET_RECORDING_STATE,
} from '../actions/recordActions';

export interface RecordState {
  recordingState: RecordingState;
}

const initialState: RecordState = {
  recordingState: RecordingState.Idling,
};

export default function recordReducer(
  state: RecordState = initialState,
  action: RecordAction,
): RecordState {
  const newState = { ...state };
  switch (action.type) {
    case SET_RECORDING_STATE:
      newState.recordingState = action.recordingState;
      return newState;
    default:
      return state;
  }
}
