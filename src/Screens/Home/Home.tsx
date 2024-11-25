import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import YourAlbum from './components/YourAlbum';
import Photos from './components/Photos';

export default function Home() {
  return (
    <View>
      {/* <YourAlbum /> */}
      <Photos />
    </View>
  );
}

const styles = StyleSheet.create({});
