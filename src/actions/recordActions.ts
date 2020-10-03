export const SET_RECORDING_STATE = 'record/SET_RECORDING_STATE';

export enum RecordingState {
  Recording,
  Paused,
  Idling,
}

interface SetRecordingStateAction {
  type: typeof SET_RECORDING_STATE;
  recordingState: RecordingState;
}

export const setRecordingState = (
  recordingState: RecordingState,
): SetRecordingStateAction => ({
  type: SET_RECORDING_STATE,
  recordingState,
});

export type RecordAction = SetRecordingStateAction;
