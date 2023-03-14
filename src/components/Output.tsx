import {View, Text, useColorScheme, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import exposure from '../store/exposure';
import {observer} from 'mobx-react-lite';
const Output = observer(() => {
  const isDarkMode = useColorScheme() === 'dark';
  const shutters = [
    '1/64000',
    '1/32000',
    '1/16000',
    '1/8000',
    '1/4000',
    '1/2000',
    '1/1000',
    '1/500',
    '1/250',
    '1/125',
    '1/60',
    '1/30',
    '1/15',
    '1/8',
    '1/4',
  ];
  console.log(
    'weather',
    exposure.weather.value,
    'fstop',
    exposure.fStop.value,
    'iso',
    exposure.iso.value,
    'shutter',
    shutters[
      exposure.weather.id + exposure.iso.invertedIndex + exposure.fStop.id
    ],
  );
  return (
    <View
      style={{
        height: 250,
        width: 250,
        // backgroundColor: '#f2dec2',
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'black',
        // borderWidth: 1,
      }}>
      <Text
        style={{
          fontSize: 64,
          color: isDarkMode ? 'white' : 'black',
          textAlign: 'center',
          fontFamily: 'Monospace',
          fontWeight: '100',
          alignItems: 'center',
          justifyContent: 'center',
          // borderColor: 'black',
          // borderWidth: 1,
        }}>
        {
          shutters[
            exposure.weather.id + exposure.iso.invertedIndex + exposure.fStop.id
          ]
        }
      </Text>
    </View>
  );
});

export default Output;
