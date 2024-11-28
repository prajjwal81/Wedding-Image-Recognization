import React, {useRef, useState} from 'react';
import {StyleSheet, View, Button, Image, Text, Dimensions} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const MultiAngleCapture = () => {
  const devices = useCameraDevices();
  const device = devices.back || devices.find(d => d.position === 'front'); // Ensure back camera is accessed
  const cameraRef = useRef<Camera>(null); // Correctly type the ref
  const [photos, setPhotos] = useState('');
  const [cameraType, setCameraType] = useState('back');

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({
          flash: 'off',
        });
        setPhotos(photo?.path);
      } catch (error) {
        console.error('Error taking photo:', error);
      }
    }
  };

  const toggleCamera = () => {
    setCameraType(cameraType === 'back' ? 'front' : 'back'); // Toggle between front and back cameras
  };

  if (!device)
    return (
      <View style={styles.loading}>
        <Text>Loading Camera...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {photos ? (
        <Image source={{uri: 'file://' + photos}} style={styles.image} />
      ) : (
        <>
          <Camera
            style={styles.camera}
            device={device}
            isActive={true}
            photo={true}
            ref={cameraRef}
          />

          <View
            style={{
              width: '100%',
              backgroundColor: 'rgba(128, 128, 128, 0.5)',
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: '40%',
            }}></View>
          <View style={styles.controls}>
            {/* <Button title="Toggle Camera" onPress={toggleCamera} /> */}
            <Button title="Capture Front" onPress={takePhoto} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  camera: {
    borderRadius: 100,
    width: '100%',
    alignSelf: 'center',
    height: '100%',
  },
  controls: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: '2%',
    alignSelf: 'center',
  },
  loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  preview: {flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'},
  image: {flex: 3, width: '100%', alignSelf: 'center'},
});

export default MultiAngleCapture;
