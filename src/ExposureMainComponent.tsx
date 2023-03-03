import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from './Slider'
import Daytime from './Daytime';
import Fstops from './Fstops';
import Output from './Output';
import exposure from './store/exposure';
import { observer } from 'mobx-react-lite';
const ExposeMainComponent = observer(() => {
    return(
        <View style={
            {
                flex: 1,
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-between',
                // backgroundColor: 'beige',
                // borderColor: 'black',
                // borderWidth: 3,
                width: '90%',
            }
    }>
            <Output />
            <Daytime />
            <Slider />
            <Fstops/>
    </View>
    )
})
export default ExposeMainComponent