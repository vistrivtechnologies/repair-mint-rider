import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dashboard, DeliveredOrder,PendingOrder } from '../screens';
import { Colors } from '../constant';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Easing } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={( { route } ) => ({
        headerShown: false,
        transitionSpec: {
          animation: 'timing',
          config: {
            duration: 150,
            easing: Easing.inOut(Easing.ease),
          },
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === 'Dashboard') {
            iconName = 'home-outline';
          } else if (route.name === 'OrderDetail') {
            iconName = 'view-grid-outline';
          } else if (route.name === 'MyProfile') {
            iconName = 'folder-outline';
          } else if (route.name === 'People') {
            iconName = 'account-group-outline';
          } else if (route.name === 'DeliveredOrder') {
            iconName = focused ? 'dots-horizontal' : 'dots-horizontal';
          } else {
            iconName = 'alert-circle-outline';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.PRIMARY[100],
        tabBarInactiveTintColor: Colors.PRIMARY[400], 
        tabBarStyle: {
          backgroundColor: Colors.PRIMARY[300],
          height: hp(8),
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        component={Dashboard}
        name={'Dashboard'}
        options={{ tabBarLabel: 'Home' }}
      />
      {/* <Tab.Screen
        component={MyProfile}
        name={'MyProfile'}
        options={{ tabBarLabel: 'Documents' }}
      /> */}
      <Tab.Screen
        component={PendingOrder}
        name={'PendingOrder'}
        options={{ tabBarLabel: 'Pending Order' }}
      />
      <Tab.Screen
        component={DeliveredOrder}
        name={'DeliveredOrder'}
        options={{ tabBarLabel: 'Delivered Order' }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
