import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuComponent from './MenuComponent';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import PreviousTrips from './PreviousTrips';
import Packs from './Packs';
import Contact from './Contact';
import Profile from './Profile';
import PlanTrip from './PlanTrip';
import Inspiration from './Inspiration';

//Navigator der sørger for at man kommer de rigtige steder hen - samt defineret at startside er menuscreen
export default function Navigator() {
    const Stack = createStackNavigator()
    return (
        
        <Stack.Navigator initialRouteName='MenuScreen'>
            {/*Sørger for at man ved tryk på knap bliver sendt til rigtige view*/}
            <Stack.Screen name = 'MenuScreen' component={MenuComponent} options={{headerShown: false}}/>
            <Stack.Screen name = 'PreviousTrips' component={PreviousTrips} options={{headerShown: false}}/>
            <Stack.Screen name = 'Packs' component={Packs} options={{headerShown: false}}/>
            <Stack.Screen name = 'Contact' component={Contact} options={{headerShown: false}}/>
            <Stack.Screen name = 'Profile' component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name = 'PlanTrip' component={PlanTrip} options={{headerShown: false}}/>
            <Stack.Screen name = 'Inspiration' component={Inspiration} options={{headerShown: false}}/>
        </Stack.Navigator>

    );
};


