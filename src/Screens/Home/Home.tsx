import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import YourAlbum from './components/YourAlbum';
import Photos from '../common/Photos';

export default function Home() {
  return (
    <View>
      <YourAlbum />
      {/* <Photos /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
  },
  heading: {
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
