import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../common/Button';

const Login = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(prev => !prev);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../Images/splashScreen.png')}
        style={{flex: 1, position: 'absolute'}}
      />

      <View style={{paddingHorizontal: '3%', paddingVertical: '5%'}}>
        <Text style={styles.heading}>Pix Studio Pro</Text>
        <Text style={[styles.text]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </View>

      <Button press={modalHandler} />

      <View style={{marginTop: '2%'}}>
        <Text style={styles.text}>
          Already Have an Account
          <Pressable onPress={() => {}}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: 'rgba(0, 137, 123, 1)',
              }}>
              {' '}
              Login{' '}
            </Text>
          </Pressable>
        </Text>
      </View>

      <Modal visible={modal} animationType="slide" transparent>
        <Pressable
          style={styles.fakeHeight}
          onPress={() => {
            setModal(false);
          }}
        />
        <LinearGradient
          colors={['rgba(0, 137, 123, 1)', 'rgba(255, 255, 255, 1)']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.modalContainer}>
          <View style={styles.container2}>
            <Text style={styles.title}>Sign up in Pix Studio Pro</Text>
            <Text style={styles.subtitle}>Lorem ipsum dolor sit amet.</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                placeholderTextColor="#8E8E8E"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your Email"
                placeholderTextColor="#8E8E8E"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter your number"
                placeholderTextColor="#8E8E8E"
                keyboardType="phone-pad"
              />
            </View>

            <Pressable style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </Pressable>

            <View style={{alignItems: 'center'}}>
              <View style={styles.checkboxContainer}>
                {/* <CheckBox
                value={isChecked}
                onValueChange={setIsChecked}
                tintColors={{true: '#2E7D6F', false: '#8E8E8E'}}
              /> */}
                <Text style={styles.checkboxText}>
                  Agree With Terms and Conditions
                </Text>
              </View>

              <Text style={styles.orText}>Or Continue With</Text>

              <View style={styles.socialContainer}>
                <Pressable style={styles.socialButton}>
                  <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
                    }}
                    style={styles.socialIcon}
                  />
                </Pressable>
                <Pressable style={styles.socialButton}>
                  <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png',
                    }}
                    style={styles.socialIcon}
                  />
                </Pressable>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Modal>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', paddingTop: '95%'},
  container2: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  heading: {
    fontFamily: 'Sansation_Bold',
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '700',
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    textAlign: 'center',
  },

  modalContainer: {flex: 1},
  fakeHeight: {
    height: '20%',
    backgroundColor: 'rgba(60, 60, 60, 0.5)',
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: '#000000',
  },
  continueButton: {
    width: '100%',
    backgroundColor: '#2E7D6F',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginTop: 10,
    marginBottom: 20,
    elevation: 5,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 10,
  },
  orText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    elevation: 3,
    padding: 15,
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
