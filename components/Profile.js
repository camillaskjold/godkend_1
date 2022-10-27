import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import ButtonComponent from './ButtonComponent';

//Contact us funktion, skal senere hen connectes til mail
export default function Profile() {
    return (
    <View style={styles.container}>
        <Text style={styles.Title}> Here you can update all your personal information</Text>
        <View style={styles.name}>
        <ButtonComponent
          onPress = {()=> console.log('Name test')}
          title = {'Change Name'}
        />
        </View>
        <View style={styles.bill}>
            <ButtonComponent
            onPress = {()=> console.log('Billing test')}
            title = {'Change Billing information'}
        />
        </View>
        <View style={styles.email}>
            <ButtonComponent
            onPress = {()=> console.log('email test')}
            title = {'Change Email'}
        />
        </View>
        <View style={styles.info}>
            <ButtonComponent
            onPress = {()=> console.log('personal infomation')}
            title = {'Change Personal information'}
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
    name: {
    position: 'absolute',
    top: 250,
    left: 35
    },

    //styling af billing info
    bill: {
    position: 'absolute',
    top: 420,
    right: 35
    },
    //styling af change email
    email: {
    position: 'absolute',
    top: 250,
    right: 35
    },
    //styling af personal info knap
    info: {
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
  
