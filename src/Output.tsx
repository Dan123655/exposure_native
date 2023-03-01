import { View, Text } from 'react-native'
import React,{useState} from 'react'
import exposure from './store/exposure';
import { observer } from 'mobx-react-lite';

const Output = observer(() => {
  const shutters = ["1/64000", "1/32000", "1/16000", "1/8000", "1/4000", "1/2000", "1/1000", "1/500", "1/250", "1/125", "1/60", "1/30", "1/15", "1/8", "1/4"];
  console.log(
    
    "weather", exposure.weather.value,
    "fstop", exposure.fStop.value,
    "iso", exposure.iso.value,
    "shutter", shutters[exposure.weather.id+exposure.iso.invertedIndex+exposure.fStop.id],
  )
  return (
    <View>
      <Text
        style={{
          fontSize: 42,
          color: 'black',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          textAlign: 'center',
          textAlignVertical: 'center',
          marginBottom: 80,

      }}>{shutters[exposure.weather.id+exposure.iso.invertedIndex+exposure.fStop.id]}</Text>
    </View>
  )
})

export default Output