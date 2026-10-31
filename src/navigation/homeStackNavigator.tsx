import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/home/Dashboard/Dashboard';
import OrderDetail from '../screens/home/orderScreens/OrderDetail';
import { HomeStackProps } from '../@types';

const HomeStack = createNativeStackNavigator<HomeStackProps>();

const HomeStackNavigator: FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="BottomTabNavigator"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{ title: 'Order Details' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
