import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Slider from './Slider'
import Daytime from './Daytime';
import Fstops from './Fstops';
import Output from './Output';
import exposure from './store/exposure';
import { observer } from 'mobx-react-lite';

const ExposeMainComponent = observer(() => {
  const outputOpacity = useRef(new Animated.Value(0)).current;
  const daytimeOpacity = useRef(new Animated.Value(0)).current;
  const sliderOpacity = useRef(new Animated.Value(0)).current;
  const fstopsOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = (value: Animated.Value, duration:number) => {
      Animated.timing(value, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start();
    };

    fadeIn(outputOpacity,2000);//Output
    fadeIn(daytimeOpacity,1500);//Daytime
    fadeIn(sliderOpacity,1000);//Slider
    fadeIn(fstopsOpacity,500);//Fstops
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90%',
      }}
    >
      <Animated.View style={{ opacity: outputOpacity }}>
        <Output />
      </Animated.View>
      <Animated.View style={{ opacity: daytimeOpacity }}>
        <Daytime />
      </Animated.View>
      <Animated.View style={{ opacity: sliderOpacity }}>
        <Slider />
      </Animated.View>
      <Animated.View style={{ opacity: fstopsOpacity }}>
        <Fstops />
      </Animated.View>
    </View>
  );
});

export default ExposeMainComponent;
