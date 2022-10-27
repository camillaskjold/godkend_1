import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

// funktion der på senere tidspunkt skal kunne vise alt info om pakkeløsninger
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
