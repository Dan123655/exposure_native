import React from 'react';
import ExposureMainComponent from './src/ExposureMainComponent'
import codePush from "react-native-code-push";
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



const App = codePush(() => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'white',
    flex: 1,
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
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDarkMode ? 'black' : '',
          paddingBottom: 70,
          paddingTop:40,

          }}>
                <ExposureMainComponent/>

        </View>
    </SafeAreaView>
  );
})


export default App;
