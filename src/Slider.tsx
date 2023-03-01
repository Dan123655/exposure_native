import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Slider from '@candlefinance/slider';
import exposure from './store/exposure';
import { observer } from 'mobx-react-lite';
const Slidr = observer(() => {
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
          console.log('CHANGE', value);
          setMyValue(value);
          exposure.setIso(value === 1 ? 50 : value === 2 ? 160 : value === 3 ? 200 : value === 4 ? 400 : value === 5 ? 800 : 100,value);
 
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
    marginBottom: 30,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
export default Slidr;