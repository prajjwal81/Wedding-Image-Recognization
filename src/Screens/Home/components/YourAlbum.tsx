import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../common/Button';

const YourAlbum = () => {
  const [modal, setModal] = useState(false);
  const categories = [
    {
      id: 1,
      title: 'Haldi Photos',
      image: require('../../../Images/haldi.png'),
    },
    {
      id: 2,
      title: 'Mehndi Photos',
      image: require('../../../Images/mehendi.png'),
    },
    {
      id: 3,
      title: 'Engagement Photos',
      image: require('../../../Images/engagement.png'),
    },
    {
      id: 4,
      title: 'Marriage Photos',
      image: require('../../../Images/wedding.png'),
    },
  ];

  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => setModal(true)}>
        <Image
          source={item?.image}
          style={styles.categoryImage}
          resizeMode="cover"
        />
        <Text style={styles.categoryText}>{item?.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Entypo name="camera" size={25} color="#FFF" />
          <Text style={styles.headerTitle}>Pix Studio Pro</Text>
        </View>
        <Text style={styles.headerSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.mainTitle}>Create Your Album</Text>
        <Text style={styles.mainSubtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>

        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>

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
          <View style={{backgroundColor: 'white', alignItems: 'center'}}>
            <Text
              style={{marginVertical: '5%', fontSize: 18, fontWeight: '800'}}>
              Select All Your Photos
            </Text>
            <Button text={'Your Photos'} press={() => {}} height={'15%'} />
            <View style={{marginVertical: '3%'}} />
            <Button text={'All Photos'} press={() => {}} height={'15%'} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default YourAlbum;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: 'rgba(0, 137, 123, 1)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
    alignItems: 'center',
    paddingTop: '20%',
  },
  headerTitle: {
    fontSize: 26,
    color: '#FFFFFF',
    marginBottom: 5,
    fontFamily: 'Sansation-Bold',
    marginLeft: 15,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    width: '81%',
  },
  content: {
    padding: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Roboto',
    letterSpacing: 0.6,
  },
  mainSubtitle: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 20,
    fontFamily: 'Inter',
  },
  grid: {
    alignItems: 'center',
  },
  categoryContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
  },
  categoryImage: {
    width: '100%',
    height: Dimensions.get('window').height / 4.9,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
  },
  fakeHeight: {
    height: '70%',
    backgroundColor: 'rgba(60, 60, 60, 0.5)',
  },
});
