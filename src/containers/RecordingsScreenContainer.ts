import { Dispatch } from 'react';
import { connect } from 'react-redux';
import RecordScreen from '../screens/Record/RecordScreen';

import { AppState } from '../reducers/rootReducer';
import {
  RecordAction,
  RecordingState,
  setRecordingState,
} from '../actions/recordActions';
import { MarkerAction } from '../actions/markerActions';

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

export default connect(mapStateToProps, mapDispatchToProps)(RecordScreen);
