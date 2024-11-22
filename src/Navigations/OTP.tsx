import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const OTP = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Enter Your OTP</Text>
      <Text style={styles.para}>Lorem ipsum dolor sit amet.</Text>
      <View style={styles.rowContainer}>
        <TextInput style={styles.inputContainer} />
        <TextInput style={styles.inputContainer} />
        <TextInput style={styles.inputContainer} />
        <TextInput style={styles.inputContainer} />
      </View>
      <Pressable style={styles.btnContainer}>
        <Text style={styles.btnTxt}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default OTP;

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    // flex: 1,

    marginHorizontal: 20,
    marginTop: 120,
  },
  heading: {
    fontFamily: 'Roboto-Regular',
    fontSize: 24,
    fontWeight: '600',
    // marginVertical: 10,
  },
  para: {
    fontFamily: 'Inter_18pt-BoldItalic',
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    width: 64,
    height: 64,
    borderRadius: 10,
    borderColor: '#8E8E93',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  btnContainer: {
    backgroundColor: '#00897B',
    padding: 18,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  btnTxt: {
    color: '#FFFFFF',
  },
});
