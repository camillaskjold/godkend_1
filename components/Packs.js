import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

// funktion der på senere tidspunkt skal kunne vise alt info om pakkeløsninger
//Indtil videre bare simple tekstbokse
export default function Packs() {
  return (
    <View style={styles.container}>
        <Text>
            On this page you will in the future be able to:
        </Text>
        <Text>
            - See an overview of differnt pack options
        </Text>
        <Text>
            - See an overview off items you will be able to rent or buy
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
