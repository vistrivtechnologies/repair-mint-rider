import React, {FC, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackProps} from '../@types';
import BottomTabNavigator from './bottomTabNavigator';

const HomeStackNavigator: FC = () => {
  const HomeStack = createNativeStackNavigator<HomeStackProps>();

  return (
   
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </HomeStack.Navigator>
   
  );
};

export default HomeStackNavigator;
