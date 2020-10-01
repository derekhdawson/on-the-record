import React, { FunctionComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Waveform from './Waveform';
import recordButtonImg from '../../images/record-button.png';

interface Props {}

const RecordScreen: FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.recordButtonImg} source={recordButtonImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#182234',
  },
  recordButtonImg: {
    height: 200,
    width: 200,
  },
});

export default RecordScreen;
