import React, { FunctionComponent } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Waveform from './Waveform';
import recordButtonImg from '../../images/record-button.png';
import { RecordState } from '../../reducers/recordReducer';
import { RecordingState } from '../../actions/recordActions';

interface Props {
  record: RecordState;
  setRecordingState: (recordingState: RecordingState) => void;
}

const renderRecordButton = (
  setRecordingState: (recordingState: RecordingState) => void,
) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setRecordingState(RecordingState.Recording);
      }}
    >
      <Image style={styles.recordButtonImg} source={recordButtonImg} />
    </TouchableOpacity>
  );
};

const renderRecording = () => {
  return (
    <View style={{ flex: 1, width: Dimensions.get('window').width }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#172031',
          justifyContent: 'center',
        }}
      >
        <Waveform />
      </View>
      <View style={{ flex: 1, backgroundColor: '#1e2b43' }}></View>
    </View>
  );
};

const RecordScreen: FunctionComponent<Props> = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.record.recordingState === RecordingState.Idling
        ? renderRecordButton(props.setRecordingState)
        : renderRecording()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e2b43',
  },
  recordButtonImg: {
    height: 200,
    width: 200,
  },
});

export default RecordScreen;
