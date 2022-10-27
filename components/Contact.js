import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import ButtonComponent from './ButtonComponent';

//Contact us funktion, skal senere hen connectes til mail
export default function Contact() {
    return (
    <View style={styles.container}>
        <Text style={styles.Title}> Please don't hesitate to contact us, if you have any questions:</Text>
        <View style={styles.contact}>
        <ButtonComponent
          onPress = {()=> console.log('Mail test')}
          title = {'Send Mail'}
        />
        </View>
        <View style={styles.chat}>
            <ButtonComponent
            onPress = {()=> console.log('chat test')}
            title = {'Chat Now'}
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

    //styling af contact 
    contact: {
    position: 'absolute',
    top: 400,
    right: 40
    },

    //styling af knap til mail
    contact: {
    position: 'absolute',
    top: 400,
    right: 35
    },

    //styling af chat
    chat: {
    position: 'absolute',
    top: 400,
    left: 35
    },

    //styling af overskrift
    Title: {
    position: 'absolute',
    color: 'dark green',
    fontWeight: 'bold',
    fontSize: 30,
    left: 10,
    top: 250,
    textShadowColor: '#171717', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 1,
  },
  });
  
