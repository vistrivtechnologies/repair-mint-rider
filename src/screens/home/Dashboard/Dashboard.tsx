import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import PendingOrder from '../orderScreens/PendingOrder';
import DeliveredOrder from '../orderScreens/DeliveredOrder';
import Notification from '../Notification/Notification';
import Profile from '../Profile/Profile';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './Dashboard.styles';

export default function Dashboard() {
  const [ activeScreen, setActiveScreen ] = useState( 'Home' );

  const renderScreen = () => {
    switch ( activeScreen ) {
      case 'Home':
        return <PendingOrder />;
      case 'Delivered':
        return <DeliveredOrder />;
      case 'Notification':
        return <Notification />;
      case 'Profile':
        return <Profile />;
      default:
        return <PendingOrder />;
    }
  };
  return (
    <View style={ { width: '100%', flex: 1 } }>
      <View style={ { width: '100%', flex: 1 } }>{ renderScreen() }</View>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={ styles.navbar }>
        <TouchableOpacity
          onPress={ () => setActiveScreen( 'Home' ) }
          style={ styles.navButton }>
          { activeScreen === 'Home' ? (
            <>
              <Feather
                name="file-text"
                size={ 25 }
                color={ 'rgb(245,141,58)' }
                style={ { marginTop: 5 } }
              />
              <View
                style={ styles.seprator }
              />
            </>
          ) : (
            <>
              <Feather
                name="file-text"
                size={ 25 }
                color={ '#76889A' }
                style={ { marginTop: 7 } }
              />
            </>
          ) }
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => setActiveScreen( 'Delivered' ) }
          style={ styles.navButton }>
          { activeScreen === 'Delivered' ? (
            <>
              <Feather
                name="truck"
                size={ 25 }
                color={ 'rgb(245,141,58)' }
                style={ { marginTop: 5 } }
              />
              <View
                style={ styles.seprator }
              />
            </>
          ) : (
            <>
              <Feather
                name="truck"
                size={ 25 }
                color={ '#76889A' }
                style={ { marginTop: 7 } }
              />
            </>
          ) }
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => setActiveScreen( 'Notification' ) }
          style={ styles.navButton }>
          { activeScreen === 'Notification' ? (
            <>
              <Feather
                name="bell"
                size={ 25 }
                color={ 'rgb(245,141,58)' }
                style={ { marginTop: 5 } }
              />
              <View
                style={ styles.seprator }
              />
            </>
          ) : (
            <>
              <Feather
                name="bell"
                size={ 25 }
                color={ '#76889A' }
                style={ { marginTop: 7 } }
              />
            </>
          ) }
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ () => setActiveScreen( 'Profile' ) }
          style={ styles.navButton }>
          { activeScreen === 'Profile' ? (
            <>
              <Feather
                name="user"
                size={ 25 }
                color={ 'rgb(245,141,58)' }
                style={ { marginTop: 7 } }
              />
              <View
                style={ styles.seprator }
              />
            </>
          ) : (
            <>
              <Feather
                name="user"
                size={ 25 }
                color={ '#76889A' }
                style={ { marginTop: 7 } }
              />
            </>
          ) }
        </TouchableOpacity>
      </View>
    </View>
  );
}
