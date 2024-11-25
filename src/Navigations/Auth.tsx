import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Auth/login';
import OTP from './OTP';
import Welcome from './Welcome';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Otp" component={OTP} />

      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
