import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SplashScreen,
  LoginScreen,
  Registration,
  OTPVerification,
} from "../screens";
import { AuthStackProps } from "../@types";

const AuthStackNavigator: FC = () => {
  const AuthStack = createNativeStackNavigator<AuthStackProps>();




  return (

    <AuthStack.Navigator screenOptions={ { headerShown: false } }>
      <AuthStack.Screen name="SplashScreen" component={ SplashScreen } />
      <AuthStack.Screen name="LoginScreen" component={ LoginScreen } />
      <AuthStack.Screen name="Registration" component={ Registration } />
      <AuthStack.Screen name="OTPVerification" component={ OTPVerification } />
    </AuthStack.Navigator>

  );
};

export default AuthStackNavigator;
