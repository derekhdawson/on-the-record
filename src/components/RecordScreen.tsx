import React, { FunctionComponent, useEffect } from 'react';
import { View } from 'react-native';
import Waveform from './Waveform';

interface Props {
  hello: string;
  setText: (text: string) => void;
}

const RecordScreen: FunctionComponent<Props> = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setText('hello world!!!');
    }, 3000);
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 100 }} />
      <Waveform />
    </View>
  );
};

export default RecordScreen;
