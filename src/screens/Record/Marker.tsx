import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { WAVE_FORM_HEIGHT } from '../../constans';
import markerImg from '../../images/marker-icon.png';

interface Props {
  startPosition: number;
  delayStartTime: number;
}

const MARKER_SIZE = 15;

function Marker(props: Props) {
  const markerPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.timing(markerPosition, {
      toValue: 1,
      duration: 12000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    setTimeout(() => {
      animation.start();
    }, props.delayStartTime * 1000);
  }, []);

  return (
    <Animated.Image
      source={markerImg}
      style={{
        position: 'absolute',
        left: 0,
        top: WAVE_FORM_HEIGHT / 2,
        width: MARKER_SIZE,
        height: MARKER_SIZE,
        transform: [
          {
            translateX: markerPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [props.startPosition, -MARKER_SIZE],
            }),
          },
        ],
      }}
    />
  );
}

export default Marker;
