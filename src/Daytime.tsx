import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import exposure from './store/exposure';
import { observer } from 'mobx-react-lite';
interface DayoptionProps {
  sometext: string;
  selected: boolean;
  onPress: () => void;
}

const DayOption = observer(({ sometext, selected, onPress }: DayoptionProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 100,
        height: 60,
        borderRadius: 20,
        backgroundColor: selected ? 'skyblue' : 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      >
        {sometext}
      </Text>
    </TouchableOpacity>
  );
})

const Daytime = observer(() => {


    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                // backgroundColor: 'gray',
                width: '100%',
          height: 100,
                marginBottom: 50,
            }}
        >
            <DayOption
                sometext="Sunny"
                selected={exposure.weather.value === 'Sunny'}
                onPress={() => exposure.setWeather('Sunny')}
            />
            <DayOption
                sometext="Cloudy"
                selected={exposure.weather.value === 'Cloudy'}
                onPress={() => exposure.setWeather('Cloudy')}
            />
            <DayOption
                sometext="Sunset"
                selected={exposure.weather.value === 'Sunset'}
                onPress={() => exposure.setWeather('Sunset')}
            />
        </View>
    );
});

export default Daytime;
