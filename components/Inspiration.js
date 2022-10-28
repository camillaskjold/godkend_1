import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

// funktion der på senere tidspunkt skal kunne give brugeren inspiration til fremtidige ture
// Indtil videre er der bare simple tekstbokse på siden
export default function Inspiration() {
  return (
    <View style={styles.container}>
        <Text>
            On this page you will in the future be able to:
        </Text>
        <Text>
            - See inspiration for different adventures
        </Text>
        <Text>
            - Read tips and tricks
        </Text>
        <Text>
            - How to's
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

//style af container + baggrundsfarve
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
