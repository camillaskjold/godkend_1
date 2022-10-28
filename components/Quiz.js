import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

// funktion der på senere tidspunkt skal kunne give brugeren mulighed for at tage en quiz
//Indtil videre bare simple tekstbokse
export default function Quiz() {
  return (
    <View style={styles.container}>
        <Text>
            On this page you will in the future be able to:
        </Text>
        <Text>
            - Take a quiz that determines a personalized packinglist 
        </Text>
        <Text>
            - You will be able to select things as; gender, destination, temperature, weight ect.
        </Text>
        <Text>
            - There will also be an option to add multiple people to the booking - all ages
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

//style af container
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
