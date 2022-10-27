import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

// funktion der på senere tidspunkt skal kunne vise alt info om pakkeløsninger
export default function Contact() {
    return (
      <View style={styles.container}>
          <Text>
              On this page you will in the future be able to:
          </Text>
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
  });
  