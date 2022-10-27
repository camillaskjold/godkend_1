import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import ButtonComponent from './ButtonComponent';

//Contact us funktion, skal senere hen connectes til mail
export default function PlanTrip() {
    return (
    <View style={styles.container}>
        <Text style={styles.Title}> Here you have different options for booking a pack</Text>
        <View style={styles.quiz}>
        <ButtonComponent
          onPress = {()=> console.log('Quiz test')}
          title = {'Take quiz'}
        />
        </View>
        <View style={styles.buy}>
            <ButtonComponent
            onPress = {()=> console.log('buy items test')}
            title = {'Buy Items'}
        />
        </View>
        <View style={styles.packs}>
            <ButtonComponent
            onPress = {()=> console.log('packs test')}
            title = {'View Packs'}
        />
        </View>
        <View style={styles.rent}>
            <ButtonComponent
            onPress = {()=> console.log('rent test')}
            title = {'Rent Items'}
        />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
  
  //style af container
  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    },

    //styling af profile 
    profile: {
    position: 'absolute',
    top: 400,
    right: 40
    },

    //styling af knap til name
    quiz: {
    position: 'absolute',
    top: 250,
    left: 35
    },

    //styling af billing info
    buy: {
    position: 'absolute',
    top: 420,
    right: 35
    },
    //styling af change email
    packs: {
    position: 'absolute',
    top: 250,
    right: 35
    },
    //styling af personal info knap
    rent: {
    position: 'absolute',
    top: 420,
    left: 35
    },

    //styling af skrift
    Title: {
    position: 'absolute',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,
    left: 10,
    top: 150,
    textShadowColor: '#171717', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 1,
  },
  });
  
