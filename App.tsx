import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';

import { RectButton } from 'react-native-gesture-handler';
import {
    useFonts,
    Lato_400Regular,
    Lato_700Bold
} from '@expo-google-fonts/lato';
import { Home } from './src/screens/Home';
export default function App() {
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <>
            <StatusBar style="auto" translucent />
            <Home />
        </>
    );
}
