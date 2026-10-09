import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { ImagesPath } from '../../../constant';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './SplashScreen.styles';
import { AuthStackProps } from '../../../@types';


type SplashScreenNavigationType = NativeStackNavigationProp<AuthStackProps, 'SplashScreen'>

const SplashScreen = () => {

  const navigation = useNavigation<SplashScreenNavigationType>();
  return (
    <View
      style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View
        style={styles.topSection}>
        <Text style={styles.mainTitleText}>
          Safe Delivery You Can Trust
        </Text>
        <Text style={styles.subTitleText}>
          Track your item live with reliable pickup and drop service.
        </Text>

        <View style={styles.dividerLine} />
      </View>

      <View
        style={styles.bottomSection}>
        <Image source={ImagesPath.delivery_Icon} style={styles.image} />

        <TouchableOpacity
          onPress={() => { navigation.navigate('LoginScreen') }}
          style={styles.loginButton}>
          <Text
            style={styles.loginButtonText}>
            Login
          </Text>


        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Registration') }} style={styles.registrationButton}>
          <Text style={styles.registrationButtonText}>Registration</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default SplashScreen
