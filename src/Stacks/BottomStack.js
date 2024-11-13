import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStack from '../Navigations/Home';
import ExploreStack from '../Navigations/Explore';
import ProfileStack from '../Navigations/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabelStyle: {},
          tabBarLabel: () => null,
          tabBarIcon: ({color, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={!focused ? 'grey' : 'white'}
              size={35}
              style={{
                alignSelf: 'center',
                bottom: Platform.OS === 'android' ? -5 : -10,
              }}
            />
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
            <Icon
              name={focused ? 'grid' : 'grid-outline'}
              color={!focused ? 'grey' : 'white'}
              size={35}
              style={{
                alignSelf: 'center',
                bottom: Platform.OS === 'android' ? -5 : -10,
              }}
            />
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
            <Icon
              name={focused ? 'person-circle-sharp' : 'person-circle-outline'}
              color={!focused ? 'grey' : 'white'}
              size={40}
              style={{
                alignSelf: 'center',
                bottom: Platform.OS === 'android' ? -5 : -10,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
