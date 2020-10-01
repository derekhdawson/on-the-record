import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {}

const ProfileScreen: FunctionComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
