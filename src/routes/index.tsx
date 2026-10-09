import React, { FC, useContext, useEffect, useState } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigator, HomeStackNavigator } from "../navigation";
import {  StatusBar,useColorScheme } from "react-native";
import { LocalStorage } from "../helpers/localstorage";
import { UserData, UserDataContext } from "../context/userDataContext";
import { Colors, ImagesPath } from "../constant";
import NetInfo from '@react-native-community/netinfo';
import { CommonAlertModal } from "../components";
import SplashScreen from "react-native-splash-screen";



const Stack = createNativeStackNavigator();
const Route: FC = () => {
  const [ userLogin, setUserLogin ] = useState<any>( undefined );
  const { isLoggedIn } = useContext<UserData>( UserDataContext );
  const { showAlert, hideAlert } = CommonAlertModal();
  const theme = useColorScheme();
  useEffect( () => {
    getAsync();
  }, [ isLoggedIn ] );

  const getAsync = async () => {
    try {
      let val = await LocalStorage.read( "@login" );
      setUserLogin( val );
      setTimeout( () => {
        SplashScreen.hide();
      }, 2000 )
    } catch ( error ) {
      console.error( "Error fetching user login status:", error );
      setUserLogin( "false" );
      setTimeout( () => {
        SplashScreen.hide();
      }, 2000 );
    }
  };
  //For Fetch Internet Connectvity
  useEffect( () => {
    const unsubscribe = NetInfo.addEventListener( state => {
      if ( !state.isConnected ) {
        showAlert(
          'Internet Issue',
          'Please try again',
          'Try Again',
          () => tryAgainWithInternet(),
          'internet',
        );
      }
    } );
    return () => {
      unsubscribe();
    };
  }, [] );

  //For Check Internet Connection And Try Again
  const tryAgainWithInternet = () => {
    NetInfo.fetch().then( state => {
      if ( state.isConnected ) {
        hideAlert();
      }
    } );
  };

  // !removed loading authscreen in first instance because of the null(false) for userLogin
  if ( userLogin === undefined || userLogin === "null" ) return <></>;
  //

  



  return (

    <NavigationContainer theme={ theme === "dark" ? DarkTheme : DefaultTheme }>
      <StatusBar
        barStyle={ 'default' }
        backgroundColor='transparent'
        translucent
      />
      <Stack.Navigator screenOptions={ { headerShown: false } }>

        

        { userLogin ? (

          <Stack.Screen
            name="HomeStackNavigator"
            component={ HomeStackNavigator }
          />

        ) : (

          <Stack.Screen
            name="AuthStackNavigator"
            component={ AuthStackNavigator }
          />

        ) }
      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default Route;
