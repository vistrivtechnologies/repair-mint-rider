import { View, Text } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Notification.styles';

export default function Notification() {
  return (
    <View style={ styles.container }>
      <ScrollView style={ { flex: 1 } }
        contentContainerStyle={ { alignItems: 'center' } }>
        <View style={ styles.header }>
          <Text style={ styles.headerText }> Notification </Text>
        </View>

        <View
          style={ styles.notificationContainer }>
          <View
            style={ styles.iconContainer }>
            <Feather name="bell" size={ 30 } color="rgb(245,141,58)" />
          </View>
          <View
            style={ styles.divider }
          />

          <View
            style={ styles.notificationDetails }>
            <Text style={ styles.notificationText }> You have an order assigned to you </Text>
            <Text style={ styles.notificationTime }> 07-15-2020 12:18:56 </Text>
          </View>
        </View>

        <View style={ styles.notificationContainer }>
          <View style={ styles.iconContainer }>
            <Feather name="bell" size={ 30 } color="rgb(102,200,106)" />
          </View>
          <View style={ styles.divider } />
          <View
            style={ styles.notificationDetails }>
            <Text
              style={ styles.notificationText }>
              You have an order assigned to you
            </Text>

            <Text
              style={ styles.notificationTimeSuccess }>
              07-15-2020 12:18:56
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
