import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from '../Navigations/Home';
import ExploreStack from '../Navigations/Explore';
import ProfileStack from '../Navigations/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Hide the header for all screens in the navigator
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(0, 137, 123, 1)',
          elevation: 0,
          borderRadius: 40,
          borderEndStartRadius: 80,
          borderEndEndRadius: 80,
          justifyContent: 'center',
          alignItems: 'center',
          width: '95%',
          position: 'absolute',
          marginLeft: '2.5%',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.container,
                {
                  backgroundColor: !focused ? 'rgba(0, 137, 123, 1)' : 'white',
                },
              ]}>
              <Icon
                name={focused ? 'home' : 'home-outline'}
                color={!focused ? 'white' : 'rgba(0, 137, 123, 1)'}
                size={35}
                style={{}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.container,
                {
                  backgroundColor: !focused ? 'rgba(0, 137, 123, 1)' : 'white',
                },
              ]}>
              <Icon
                name={focused ? 'grid' : 'grid-outline'}
                color={!focused ? 'white' : 'rgba(0, 137, 123, 1)'}
                backgroundColor={!focused ? 'rgba(0, 137, 123, 1)' : 'white'}
                size={35}
                style={{}}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.container,
                {
                  backgroundColor: !focused ? 'rgba(0, 137, 123, 1)' : 'white',
                },
              ]}>
              <Icon
                name={focused ? 'person-circle-sharp' : 'person-circle-outline'}
                color={!focused ? 'white' : 'rgba(0, 137, 123, 1)'}
                backgroundColor={!focused ? 'rgba(0, 137, 123, 1)' : 'white'}
                size={40}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    top: '60%',
  },
});
