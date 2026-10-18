
import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles from './Notification.styles';

const notifications = [
  {
    id: '1',
    title: 'You have an order assigned to you',
    order: 'Order #RM2147',
    location: 'Boring Road, Patna',
    time: '07-15-2020 12:18:56',
    color: '#F58D3A',
    background: '#FFF6ED',
    borderColor: '#F9E5D2',
  },
  {
    id: '2',
    title: 'You have an order assigned to you',
    order: 'Order #RM2146',
    location: 'Gandhi Maidan, Patna',
    time: '07-15-2020 12:18:56',
    color: '#35B96A',
    background: '#F2FBF5',
    borderColor: '#DDF2E4',
  },
];

export default function Notification() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFFDFC"
        barStyle="dark-content"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Feather
              name="bell"
              size={30}
              color="#F58D3A"
            />
          </View>

          <View style={styles.headerDetails}>
            <Text style={styles.headerText}>
              Notifications
            </Text>
            <Text style={styles.headerSubtitle}>
              Stay updated with your latest activities
            </Text>
          </View>
        </View>

        {/* Notification Cards */}
        <View style={styles.notificationList}>
          {notifications.map(item => (
            <View
              key={item.id}
              style={[
                styles.notificationContainer,
                {
                  backgroundColor: item.background,
                  borderColor: item.borderColor,
                },
              ]}
            >
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: item.color + '18' },
                ]}
              >
                <Feather
                  name="bell"
                  size={27}
                  color={item.color}
                />
              </View>

              <View style={styles.notificationDetails}>
                <Text style={styles.notificationText}>
                  {item.title}
                </Text>

                <Text style={styles.orderDetails}>
                  {item.order}  ·  {item.location}
                </Text>

                <View style={styles.timeRow}>
                  <Feather
                    name="clock"
                    size={16}
                    color={item.color}
                  />
                  <Text
                    style={[
                      styles.notificationTime,
                      { color: item.color },
                    ]}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>

              <View style={styles.arrowContainer}>
                <Feather
                  name="chevron-right"
                  size={23}
                  color="#77869A"
                />
              </View>
            </View>
          ))}
        </View>

        {/* Empty-state / Decorative Section */}
        <View style={styles.emptyState}>
          <View style={styles.emptyIconCircle}>
            <Feather
              name="bell"
              size={47}
              color="#8090A5"
            />
          </View>

          <Text style={styles.emptyTitle}>
            All caught up!
          </Text>

          <Text style={styles.emptyDescription}>
            You're all set. New notifications
            {'\n'}will appear here.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
