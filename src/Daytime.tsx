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
        width: 90,
        height: 50,
        // height: selected ? 55 : 50,
        borderRadius:10,
        backgroundColor: selected ? '#9693b4' : '#f2dec2',
        borderBottomColor: 'grey',
        borderBottomWidth: selected ? 2 : 0,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: 'black',
        // borderWidth: 1,
      }}
    >
      <Text
        style={{
          // fontSize: selected ? 22 : 16,
          fontSize: 16,
          fontFamily: 'Monospace',
          color: selected ? 'white' : 'black',
          textAlign: 'center',
          textAlignVertical: 'center',
        }}
      >
        {sometext.toLocaleLowerCase()}
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
                // width: '100%',
                width: 350,
          maxHeight: 80,
          // borderColor: 'black',
          // borderWidth: 1,
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
