import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Slider from '@candlefinance/slider';
import exposure from './store/exposure';
import { observer } from 'mobx-react-lite';
const Fstops = observer(() => {
    const [myValue, setMyValue] = React.useState<number>(6);
    return (
      <>
      <View style={styles.container}>
        <Slider
          snowballValue={exposure.fStop.value}
          value={myValue}
          disabled={false}
          min={1}
          max={9}
          onChange={(value) => {
            console.log('CHANGE', value);
              setMyValue(value);
                exposure.setFstop(value);
          }}
          onComplete={(value) => {
            console.log('COMPLETE', value);
          }}
          width={300}
          height={54}
          step={1}
          maximumTrackTintColor="#c7c7c7"
          minimumTrackTintColor="#ff0067"
          ballIndicatorColor={'gray'}
          ballIndicatorTextColor={'white'}
  
        />
            </View>
        </>
    );
  })
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    box: {
      width: 60,
      height: 60,
      marginVertical: 20,
    },
  });
export default Fstops
