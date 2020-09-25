import React, { FunctionComponent } from 'react';
import {
  View,
  Dimensions,
  requireNativeComponent,
  StyleProp,
  ViewStyle,
} from 'react-native';

const WAVE_FORM_HEIGHT = 100;
const WAVE_FORM_WIDTH = Dimensions.get('window').width;

interface Props {
  style?: StyleProp<ViewStyle>;
}

const WaveformView = requireNativeComponent<Props>('Waveform');

const Waveform: FunctionComponent<Props> = (props: Props) => {
  return (
    <View style={{ borderWidth: 2, borderColor: 'black' }}>
      <WaveformView
        style={{ width: WAVE_FORM_WIDTH, height: WAVE_FORM_HEIGHT }}
      />
      <View
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          backgroundColor: 'red',
        }}
      />
    </View>
  );
};

export default Waveform;
