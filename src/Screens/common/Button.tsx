import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Button() {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Get Started</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 137, 123, 1)',
    width: '80%',
    alignSelf: 'center',
    height: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
