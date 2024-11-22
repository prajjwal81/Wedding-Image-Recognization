import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ButtonInt {
  press: () => void;
}

export default function Button({press}: ButtonInt) {
  return (
    <Pressable style={styles.container} onPress={() => press()}>
      <Text style={styles.text}>Get Started</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 137, 123, 1)',
    width: '80%',
    alignSelf: 'center',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
