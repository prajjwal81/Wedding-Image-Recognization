import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../Screens/Auth/login';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
