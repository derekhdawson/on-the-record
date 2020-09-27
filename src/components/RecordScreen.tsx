import { Player, Recorder } from '@react-native-community/audio-toolkit';
import React, { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import Waveform from './Waveform';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const playFile = (file: string) => {
  var whoosh = new Sound(file, Sound.DOCUMENT, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
    );

    // Play the sound with an onEnd callback
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
};

interface Props {
  hello: string;
  setText: (text: string) => void;
}

const RecordScreen: FunctionComponent<Props> = (props: Props) => {
  useEffect(() => {
    const fileName = 'test5.mp4';

    let recorder: Recorder = new Recorder(fileName);
    recorder.record((err) => {
      console.log(err);
      console.log(recorder.fsPath);

      setTimeout(() => {
        recorder.pause();
        playFile(recorder.fsPath);
      }, 10000);
    });

    // setTimeout(() => {
    //   recorder.stop((err) => {
    //     console.log(err);
    //   });
    // }, 5000);
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 100 }} />
      <Waveform />
    </View>
  );
};

export default RecordScreen;
