import * as React from 'react';
import { StyleSheet, View, Text, useColorScheme } from 'react-native';
import Slider from '@candlefinance/slider';
import exposure from '../store/exposure';
import { observer } from 'mobx-react-lite';
import { screenWidth } from '../utils/constants';
const Slidr = observer(() => {
  const IsDarkMode = useColorScheme() === 'dark';
  const [myValue, setMyValue] = React.useState<number>(2);

  return (
    <>
    <View style={styles.container}>
      <Slider
        snowballValue={exposure.iso.value}
        value={myValue}
        disabled={false}
        min={1}
        max={5}
        onChange={(value) => {
          // console.log('CHANGE', value);
          setMyValue(value);
          exposure.setIso(value === 1 ? 50 : value === 2 ? 160 : value === 3 ? 200 : value === 4 ? 400 : value === 5 ? 800 : 100,value);
 
        }}
        onComplete={(value) => {
          // console.log('COMPLETE', value);
        }}
        width={screenWidth * 0.7}
        height={54}
        step={1}
        maximumTrackTintColor="#d8c3c3"
        minimumTrackTintColor="#c0abc1"
        ballIndicatorColor={'#f2dec2'}
        ballIndicatorTextColor={'black'}

        />
        <Text style={{
                    
                      color: IsDarkMode ? 'lightgrey' : 'grey',
                  }}>
            film speed (ISO)
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
  }
});
export default Slidr;