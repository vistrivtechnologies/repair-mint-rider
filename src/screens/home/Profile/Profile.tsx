import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Profile.styles';


export default function Profile() {

  const [ userData, setUserData ] = useState()
  const [ userLoading, setUserLoading ] = useState( true )

 
  const secretKey = '4Q8P3805IM195';
 

  if ( userLoading ) {
    return (
      <View style={ styles.loadingContainer }>
        <ActivityIndicator color={ "#000" } size={ "small" } />
        <Text style={ styles.loadingText }>Loading..</Text>
      </View>
    )
  }

  return (
    <View style={ styles.container }>
      <ScrollView
        style={ styles.scrollContainer }
        contentContainerStyle={ { alignItems: 'center' } }>
        <View style={ styles.header }>
          <Text
            style={ styles.headerText }>
            My Profile{ ' ' }
          </Text>
        </View>

        <View
          style={ styles.infoRow }>
          <View
            style={ styles.iconContainer }>
            <Feather name="user" size={ 22 } color="rgb(245,141,58)" />
          </View>

          <View
            style={ styles.infoTextContainer }>
            <Text
              style={ styles.infoText }>
              Jane Cooper
            </Text>
          </View>

          <View
            style={ {
              width: '20%',
              height: 50,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
            <Feather name="edit-2" size={ 22 } color="rgb(245,141,58)" />
          </View>
        </View>
        <View
          style={ {
            width: '90%',
            height: 50,
            borderBottomWidth: 2,
            borderBottomColor: '#eeee',
            flexDirection: 'row',
            marginTop: 20,
          } }>
          <View
            style={ {
              width: '20%',
              height: 50,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
            <Feather name="phone" size={ 22 } color="rgb(245,141,58)" />
          </View>

          <View
            style={ {
              width: '60%',
              flexDirection: 'column',
              justifyContent: 'center',
            } }>
            <Text
              style={ {
                marginLeft: 10,
                color: '#000',
                fontFamily: 'Inter_24pt-SemiBold',
                fontSize: 14,
              } }>
              8518900258
            </Text>
          </View>

          <View
            style={ {
              width: '20%',
              height: 50,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            } }>
            <Feather name="edit-2" size={ 22 } color="rgb(245,141,58)" />
          </View>
        </View>

        <View
          style={ {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
            height: 50,
            marginTop: 30,
          } }>
          <View
            style={ {
              width: '50%',
              flexDirection: 'column',
              height: 50,
              justifyContent: 'center',
            } }>
            <Text style={ { fontFamily: 'Inter_24pt-SemiBold', color: '#000' } }>
              Delivered Status
            </Text>
            <Text style={ { color: '#c7c7c7', fontFamily: 'Inter_24pt-SemiBold' } }>
              Available
            </Text>
          </View>
          <View
            style={ {
              width: '50%',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            } }></View>
        </View>

        <TouchableOpacity
          // onPress={ logOut }
          style={ {
            width: '90%',
            borderColor: '#eeee',
            borderWidth: 1,
            height: 50,
            borderRadius: 10,
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          } }>
          <Text
            style={ {
              marginLeft: 20,
              fontFamily: 'Inter_24pt-SemiBold',
              fontSize: 16,
              color: 'rgb(245,141,58)',
            } }>
            Log Out
          </Text>
          <Feather
            name="log-in"
            color="rgb(245,141,58)"
            style={ { marginRight: 15 } }
            size={ 25 }
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
