import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './ButtonComponent';
import React from 'react';

const image = { uri: "https://cdn.pixabay.com/photo/2015/03/30/12/31/trees-698456_1280.jpg" }

export default function MenuComponent({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
     <Text style={styles.bigTitle}> Welcome Wanderer</Text> 
     <Text style={styles.smallTitle}> What are you waiting for? Go explore! </Text> 
      <View style = {styles.plantrip}>
        <ButtonComponent
          onPress = {()=> console.log('test')}
          title = {'Plan Trip'}
      />
      </View>
      <View style={styles.previoustrip}>
        <ButtonComponent
          onPress = {()=> navigation.navigate('PreviousTrips')}
          title = {'Previous Trips'}
          />
      </View>
      <View style={styles.inspiration}>
        <ButtonComponent
          onPress = {()=> console.log('test3')}
          title = {'Inspiration'}
          />
      </View>
      <View style={styles.profile}>
      <ButtonComponent
        onPress = {()=> console.log('test4')}
        title = {'Profile'}
    />
      </View>
      <View style={styles.contact}>
      <ButtonComponent
        onPress = {()=> console.log('test5')}
        title = {'Contact Us'}
    />
          </View>
      <View style={styles.packs}>
      <ButtonComponent
        onPress = {()=> navigation.navigate('Packs')}
        title = {'Packages'}
    />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  plantrip: {
    position: 'absolute',
    top: 250,
    left: 40

  },
  previoustrip: {
    position: 'absolute',
    top: 250,
    right: 40

  },
  inspiration: {
    position: 'absolute',
    top: 425,
    right: 40
  },
  profile: {
    position: 'absolute',
    top: 425,
    left: 40
  },
  contact: {
    position: 'absolute',
    top: 600,
    right: 40
  },
  packs: {
    position: 'absolute',
    top: 600,
    left: 40
  },
  bigTitle: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
    left: 10,
    top: 90,
    textShadowColor: '#171717', 
    textShadowOffset: {width: -2, height: 2}, 
    textShadowRadius: 1,
  },
  smallTitle: {
    position: 'absolute',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    left: 15,
    top: 170,
    textAlign: 'center',
    textShadowColor: '#171717', 
    textShadowOffset: {width: -1, height: 1}, 
    textShadowRadius: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
