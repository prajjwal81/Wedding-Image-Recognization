import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Photos from '../common/Photos';
import ProfileIcon from '../../Images/svg/profile.svg';
import MailIcon from '../../Images/svg/Mail.svg';
import PhoneIcon from '../../Images/svg/phone.svg';
const Profile = () => {
  return (
    <View>
      <Photos />
      <View style={styles.container}>
        <View
          style={[
            styles.circle,
            styles.container,
            {backgroundColor: '#D9D9D9'},
          ]}>
          <Text style={styles.heading}>B</Text>
        </View>
        <Text style={styles.name}>Bhanu Singh</Text>
        <View style={styles.innerContainer}>
          <View style={styles.rowContainer}>
            <ProfileIcon />
            <TextInput placeholder="Edit Name" style={styles.inputContainer} />
          </View>

          <View style={styles.rowContainer}>
            <MailIcon />
            <TextInput placeholder="Edit Email" style={styles.inputContainer} />
          </View>
          <TextInput />
          <View style={styles.rowContainer}>
            <PhoneIcon />
            <TextInput
              placeholder="Edit Number"
              style={styles.inputContainer}
            />
          </View>
          <TextInput />
          <Pressable style={styles.btnContainer}>
            <Text style={styles.btnTxt}>Update Profile</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  circle: {
    backgroundColor: '#D9D9D9',
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  heading: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 32,
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 24,
    marginVertical: 10,
  },
  innerContainer: {
    // flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: 20,
    shadowColor: '#00000040',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    // Shadow for Android
    elevation: 5,
    // width: '100%',
  },
  inputContainer: {
    marginLeft: 10,
    width: '80%',
    padding: 15,
  },
  btnContainer: {
    backgroundColor: '#00897B',
    padding: 18,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginBottom: 20,
  },
  btnTxt: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 16,
  },
});
