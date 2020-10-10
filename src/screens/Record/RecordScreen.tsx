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
import { Recorder } from '@react-native-community/audio-toolkit';

interface Props {
  record: RecordState;
  markers: number[];
  setRecordingState: (recordingState: RecordingState) => void;
  addMarker: () => void;
}

export default function RecordScreen(props: Props) {
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
        const recorderOptions = {
          bitrate: 128000,
          channels: 2,
          sampleRate: 44100,
          format: 'aac',
          encoder: 'aac',
          quality: 'max',
        };
        const recorder = new Recorder('file.aac', recorderOptions);
        if (!recorder.canPrepare) {
          console.log('ERROR: CAN NOT PREPARE RECORDING');
          return;
        }

        recorder.prepare((error, filePath) => {
          if (error) {
            console.log(error);
          } else {
            if (!recorder.canRecord) {
              console.log('ERROR: CAN NOT RECORD');
              return;
            }
            recorder.record((error) => {
              if (error) {
                console.log(error);
              } else {
                setRecordingState(RecordingState.Recording);
                console.log(filePath);
              }
            });
          }
        });
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
        <View style={{ marginTop: 50 }} />
        <Button title="SAVE" onPress={() => {}} />
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
