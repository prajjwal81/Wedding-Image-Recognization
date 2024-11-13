import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explore from '../Screens/Explore/Explore';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
