import { View, Text, StyleSheet,useColorScheme } from 'react-native'
import React, {useState} from 'react'
import Slider from '@candlefinance/slider';
import exposure from './store/exposure';
import { observer } from 'mobx-react-lite';
import { screenWidth } from './utils/constants';
const Fstops = observer(() => {
  const IsDarkMode = useColorScheme() === 'dark';
    const [myValue, setMyValue] = React.useState<number>(6);
    return (
      <>
      <View style={styles.container}>
        <Slider
          snowballValue={'f'+exposure.fStop.value}
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
          width={screenWidth * 0.7}
          height={54}
          step={1}
          maximumTrackTintColor="#d8c3c3"
          minimumTrackTintColor="#c0abc1"
          ballIndicatorColor={'#f2dec2'}
          ballIndicatorTextColor={'black'}
  
          />
          <Text
            style={{
              color: IsDarkMode ? 'lightgrey' : 'grey',
          }}>
            aperture
          </Text>
            </View>
        </>
    );
  })
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      maxHeight: 120,
      alignItems: 'center',
      justifyContent: 'flex-end',
      // borderColor: 'orange',
      // borderWidth: 1,
    },
  });
export default Fstops
