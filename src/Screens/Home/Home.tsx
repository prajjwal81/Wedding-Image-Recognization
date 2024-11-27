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
  const [modal, setModal] = useState(true);
  return (
    <SafeAreaView>
      {/* <YourAlbum /> */}
      <Photos />
      <View style={styles.container}>
        <Modal
          visible={modal}
          animationType="slide"
          transparent
          style={{borderWidth: 2}}>
          <Pressable
            style={styles.fakeHeight}
            onPress={() => {
              setModal(false);
            }}
          />
          <Text>Select All Your Photos</Text>
          <Pressable>
            <Text>All Photos</Text>
          </Pressable>
          <Pressable>
            <Text>Your Photos</Text>
          </Pressable>
        </Modal>
      </View>
    </SafeAreaView>
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
  fakeHeight: {
    height: '70%',
    backgroundColor: 'rgba(60, 60, 60, 0.5)',
  },
});
