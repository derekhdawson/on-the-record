import React, { FunctionComponent, useEffect } from 'react';
import { View, Text } from 'react-native';

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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Record Screen</Text>
      <Text>{props.hello}</Text>
    </View>
  );
};

export default RecordScreen;
