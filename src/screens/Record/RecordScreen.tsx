import React, { FunctionComponent } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  Button,
} from 'react-native';
import Waveform from './Waveform';
import Marker from './Marker';
import recordButtonImg from '../../images/record-button.png';
import { RecordState } from '../../reducers/recordReducer';
import { RecordingState } from '../../actions/recordActions';

interface Props {
  record: RecordState;
  markers: number[];
  setRecordingState: (recordingState: RecordingState) => void;
  addMarker: () => void;
}

function RecordScreen(props: Props) {
  console.log(props);
  return (
    <View style={styles.container}>
      {props.record.recordingState === RecordingState.Idling
        ? renderRecordButton(props.setRecordingState)
        : renderRecording(props.markers, props.addMarker)}
    </View>
  );
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

const renderRecording = (markers: number[], addMarker: () => void) => {
  return (
    <View style={{ flex: 1, width: Dimensions.get('window').width }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#172031',
          justifyContent: 'center',
        }}
      >
        <View>
          <Waveform />
          {markers.map((marker, index) => (
            <Marker key={marker} startPosition={400} delayStartTime={0} />
          ))}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#1e2b43',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="MARK"
          onPress={() => {
            addMarker();
          }}
        />
      </View>
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
