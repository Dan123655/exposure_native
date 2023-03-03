/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import ExposureMainComponent from './src/ExposureMainComponent'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { screenHeight } from './src/utils/constants';



function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    minHeight: screenHeight,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />




        
        <View
          style={{
            // backgroundColor: isDarkMode ? Colors.black : Colors.white,
            flex: 1,
            // flexWrap: 'wrap',
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

            marginTop: 5,
            backgroundColor: isDarkMode ? 'black' : '',
            // borderColor: 'black',
          // borderWidth: 1,
          paddingBottom: 70,
          paddingTop:40,

          }}>
                <ExposureMainComponent/>

        </View>
    </SafeAreaView>
  );
}


export default App;
