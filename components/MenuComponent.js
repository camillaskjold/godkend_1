import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ButtonComponent from './ButtonComponent';
import React from 'react';

//Billede bliver hentet fra web
const image = { uri: "https://cdn.pixabay.com/photo/2015/03/30/12/31/trees-698456_1280.jpg" }

//komponent der gengiver menu med tilhørende knapper
export default function MenuComponent({navigation}) {
  return (
    <View style={styles.container}>
      {/*Billede sat som baggrund*/}
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      {/*Overskrifter bliver defineret*/}
     <Text style={styles.bigTitle}> Welcome Wanderer</Text> 
     <Text style={styles.smallTitle}> What are you waiting for? Go explore! </Text> 
      <View style = {styles.plantrip}>
        
        {/*Knap til plan trip -> sender bruger videre til plan trip mulighed*/}
        <ButtonComponent
          onPress = {()=> navigation.navigate('PlanTrip')}
          title = {'Plan Trip'}
      />
      </View>
      {/*Knap til previous trips -> sender bruger videre til oversigt over tidligere trips*/}
      <View style={styles.previoustrip}>
        <ButtonComponent
          onPress = {()=> navigation.navigate('PreviousTrips')}
          title = {'Previous Trips'}
          />
      </View>
      {/*Knap til inspiration -> sender bruger videre til side med inspiration */}
      <View style={styles.inspiration}>
        <ButtonComponent
          onPress = {()=> navigation.navigate('Inspiration')}
          title = {'Inspiration'}
          />
      </View>
      {/*Knap til profile -> sender bruger videre oversigt med deres egen information*/}
      <View style={styles.profile}>
      <ButtonComponent
        onPress = {()=> navigation.navigate('Profile')}
        title = {'Profile'}
    />
      </View>
      {/*Knap til contact -> sender bruger videre til mulighed for at kontakte virksomheden*/}
      <View style={styles.contact}>
      <ButtonComponent
        onPress = {()=> navigation.navigate('Contact')}
        title = {'Contact Us'}
    />
      </View>
      {/*Knap til packs -> sender bruger videre til oversigt over forskellige pakkeløsninger samt udstyr*/}
      <View style={styles.packs}>
      <ButtonComponent
        onPress = {()=> navigation.navigate('Packs')}
        title = {'Packages'}
    />
      </View>
      {/*Vil altid vise statusbar på telefonen v. auto*/}
      <StatusBar style="auto" />
    </View>
  );
}

//styling af menu
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  //styling af plan trip
  plantrip: {
    position: 'absolute',
    top: 250,
    left: 40

  },
  //styling af previous trip
  previoustrip: {
    position: 'absolute',
    top: 250,
    right: 40

  },
  //styling af inspiration
  inspiration: {
    position: 'absolute',
    top: 425,
    right: 40
  },
  //styling af profile
  profile: {
    position: 'absolute',
    top: 425,
    left: 40
  },
  //styling af contact 
  contact: {
    position: 'absolute',
    top: 600,
    right: 40
  },
  //styling af pakkeløsninger
  packs: {
    position: 'absolute',
    top: 600,
    left: 40
  },
  //styling af overskrift
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
  //styling af mindre overskrift
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
  //styling af billede
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
