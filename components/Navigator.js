import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuComponent from './MenuComponent';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import PreviousTrips from './PreviousTrips';
import Packs from './Packs';
import Contact from './Contact';

export default function Navigator() {
    const Stack = createStackNavigator()
    return (
        
        <Stack.Navigator initialRouteName='MenuScreen'>
            <Stack.Screen name = 'MenuScreen' component={MenuComponent} options={{headerShown: false}}/>
            <Stack.Screen name = 'PreviousTrips' component={PreviousTrips} options={{headerShown: false}}/>
            <Stack.Screen name = 'Packs' component={Packs} options={{headerShown: false}}/>
            <Stack.Screen name = 'Contact' component={Contact} options={{headerShown: false}}/>
        </Stack.Navigator>

    );
};


