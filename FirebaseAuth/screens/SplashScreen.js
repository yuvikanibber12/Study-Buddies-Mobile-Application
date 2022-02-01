import React from 'react'
import {View, Image} from 'react-native'

const SplashScreen = () => {
   return (
    //splash screen image view upon app launch   
    <View>
        <Image 
            style = {{width: '100%', height: '100%'}}
            source = {require('../assets/splash.png')}
        />
    </View>
    );
}

export default SplashScreen