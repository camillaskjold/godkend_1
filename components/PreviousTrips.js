import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import FlatListComponent from './FlatListComponent';


export default function PreviousTrips() {
  
  //funktion der henter liste med previous trips fra array i flatlistcomponent
    return (
    <View style={styles.container}>
        <Text></Text>
        <FlatListComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //styling af overskift
  bigGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 35,
    height: 150,
    top: 75,
    textShadowColor: '#171717', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 1,
  },
});
