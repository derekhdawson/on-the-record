import React from 'react';
import {
  Dimensions,
  requireNativeComponent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { WAVE_FORM_HEIGHT } from '../../constans';

const WAVE_FORM_WIDTH = Dimensions.get('window').width;

const WaveformView = requireNativeComponent<{ style?: StyleProp<ViewStyle> }>(
  'Waveform',
);

function Waveform() {
  return (
    <WaveformView
      style={{
        height: WAVE_FORM_HEIGHT,
      }}
    />
  );
}

// function Waveform() {
//   return (
//     <View
//       style={{
//         width: WAVE_FORM_WIDTH,
//         height: WAVE_FORM_HEIGHT,
//         borderWidth: 0,
//         borderColor: 'yellow',
//       }}
//     />
//   );
// }

export default Waveform;
