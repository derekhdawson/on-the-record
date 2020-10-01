import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const RecordingsScreen: FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>RecordingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RecordingsScreen;
