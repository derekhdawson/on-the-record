import { Dispatch } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../reducers/rootReducer';
import {
  RecordAction,
  RecordingState,
  setRecordingState,
} from '../actions/recordActions';
import { MarkerAction } from '../actions/markerActions';
import RecordingsScreen from '../screens/Recordings/RecordingsScreen';

const mapStateToProps = (state: AppState) => {
  return {
    record: state.record,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<RecordAction | MarkerAction>,
) => ({
  setRecordingState: (recordingState: RecordingState) => {
    dispatch(setRecordingState(recordingState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecordingsScreen);
