import { Dispatch } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../reducers/rootReducer';
import {
  RecordAction,
  RecordingState,
  setRecordingState,
} from '../actions/recordActions';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const mapStateToProps = (state: AppState) => {
  return {
    record: state.record,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<RecordAction>) => ({
  setRecordingState: (recordingState: RecordingState) => {
    dispatch(setRecordingState(recordingState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
