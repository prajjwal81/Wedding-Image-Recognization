import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Main from './main';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Arrow from './src/Images/svg/arrowWithHand.svg';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
