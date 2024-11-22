import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const OTP = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Enter Your OTP</Text>
      <Text>Lorem ipsum dolor sit amet.</Text>
    </SafeAreaView>
  );
};
export default OTP;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    // flex: 1,
    borderWidth: 10,
  },
  heading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    fontWeight: '600',
  },
});
