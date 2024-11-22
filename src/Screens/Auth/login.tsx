import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../common/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/splashScreen.png')}
        style={{flex: 1, position: 'absolute'}}
      />

      <View>
        <Text style={styles.heading}>Pix Studio Pro</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </View>

      <Button />

      {/* <Modal>
        <LinearGradient
          colors={['rgba(0, 137, 123, 1)', 'rgba(255, 255, 255, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.modalContainer}></LinearGradient>
      </Modal> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', paddingTop: '90%'},
  heading: {fontFamily: 'Sansation', fontSize: 20, textAlign: 'center'},
  modalContainer: {},
});
