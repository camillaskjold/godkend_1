import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

export default function ButtonComponent(props) {
    const {title, onPress} = props;
  return (
    <View style={styles.container}>
      <Pressable
        onPress = {()=> onPress()}
        style = {styles.button}
      > 
        <Text style = {styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 150,
    height: 150,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'beige',
    backgroundColor: 'grey',
    shadowColor: '#171717',  
    shadowOpacity: 0.5,  
    shadowRadius: 30,
    shadowOffset: {width: -1.5, height: 3},
  
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textShadowColor: '#171717', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 5,
  },
});
