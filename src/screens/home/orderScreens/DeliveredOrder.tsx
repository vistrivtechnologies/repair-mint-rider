
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function DeliveredOrder() {
  const navigation = useNavigation<any>();

  const order = {
    id: '68sdfsdfdsgfdgdrffesdf',
    date: '07-06-2015',
    paymentStatus: 'COD - Pending',
    total: '$185',
    status: 'Delivered',
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar
        backgroundColor="#FFFCF8"
        barStyle="dark-content"
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 22,
            paddingTop: 55,
            paddingBottom: 24,
            backgroundColor: '#FFFCF8',
            borderBottomWidth: 1,
            borderBottomColor: '#F3EEE7',
          }}
        >
          <View
            style={{
              width: 62,
              height: 62,
              borderRadius: 31,
              backgroundColor: '#FFF0DF',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 15,
            }}
          >
            <Feather
              name="truck"
              size={30}
              color="#F58D3A"
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                fontSize: 25,
                color: '#1D2B3D',
              }}
            >
              Orders
            </Text>

            <Text
              style={{
                fontFamily: 'Inter_24pt-Medium',
                fontSize: 12,
                color: '#7A899E',
                marginTop: 4,
              }}
            >
              Your completed deliveries
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#EAF8EE',
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 4,
                backgroundColor: '#32AE5A',
                marginRight: 6,
              }}
            />

            <Text
              style={{
                color: '#26984B',
                fontSize: 11,
                fontFamily: 'Inter_24pt-SemiBold',
              }}
            >
              Delivered
            </Text>
          </View>
        </View>

        {/* Section title */}
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 25,
            marginBottom: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                fontSize: 19,
                color: '#1D2B3D',
              }}
            >
              All Delivered
            </Text>

            <Text
              style={{
                fontFamily: 'Inter_24pt-Medium',
                fontSize: 12,
                color: '#8995A6',
                marginTop: 4,
              }}
            >
              Your delivery history
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#F1F8F2',
              borderRadius: 12,
              paddingHorizontal: 12,
              paddingVertical: 8,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: '#2FA653',
                fontFamily: 'Inter_24pt-SemiBold',
              }}
            >
              Completed
            </Text>
          </View>
        </View>

        {/* Order card */}
        <View
          style={{
            marginHorizontal: 18,
            backgroundColor: '#FFFFFF',
            borderRadius: 22,
            borderWidth: 1,
            borderColor: '#EAEFEA',
            overflow: 'hidden',
            elevation: 3,
            shadowColor: '#24372B',
            shadowOpacity: 0.07,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 5 },
          }}
        >
          {/* Order ID and status */}
          <View
            style={{
              backgroundColor: '#F5FBF6',
              padding: 17,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 12,
                  color: '#7A899E',
                }}
              >
                ORDER ID
              </Text>

              <Text
                numberOfLines={2}
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  fontSize: 14,
                  color: '#1D2B3D',
                  marginTop: 5,
                }}
              >
                {order.id}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#E4F7E9',
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Feather
                name="check-circle"
                size={15}
                color="#279D4A"
              />

              <Text
                style={{
                  color: '#279D4A',
                  fontFamily: 'Inter_24pt-SemiBold',
                  fontSize: 11,
                  marginLeft: 5,
                }}
              >
                {order.status}
              </Text>
            </View>
          </View>

          {/* Date and payment details */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 15,
              paddingVertical: 20,
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                backgroundColor: '#FFF1E3',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 9,
              }}
            >
              <Feather
                name="calendar"
                size={18}
                color="#F58D3A"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#7A899E',
                  fontFamily: 'Inter_24pt-Medium',
                }}
              >
                Order placed on
              </Text>

              <Text
                style={{
                  fontSize: 13,
                  color: '#243247',
                  fontFamily: 'Inter_24pt-SemiBold',
                  marginTop: 6,
                }}
              >
                {order.date}
              </Text>
            </View>

            <View
              style={{
                width: 1,
                height: 43,
                backgroundColor: '#E9EDF2',
                marginHorizontal: 10,
              }}
            />

            <View
              style={{
                width: 38,
                height: 38,
                borderRadius: 19,
                backgroundColor: '#EDF4FF',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 9,
              }}
            >
              <Feather
                name="credit-card"
                size={18}
                color="#648FCF"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 11,
                  color: '#7A899E',
                  fontFamily: 'Inter_24pt-Medium',
                }}
              >
                Payment status
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  color: '#243247',
                  fontFamily: 'Inter_24pt-SemiBold',
                  marginTop: 6,
                }}
              >
                {order.paymentStatus}
              </Text>
            </View>
          </View>

          {/* Payment summary */}
          <View
            style={{
              height: 1,
              backgroundColor: '#EDF0F3',
              marginHorizontal: 16,
            }}
          />

          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 17,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F0FAF2',
                padding: 11,
                borderRadius: 16,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  width: 43,
                  height: 43,
                  borderRadius: 22,
                  backgroundColor: '#DDF4E3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 11,
                }}
              >
                <Feather
                  name="dollar-sign"
                  size={22}
                  color="#279D4A"
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 11,
                    color: '#7A899E',
                    fontFamily: 'Inter_24pt-Medium',
                  }}
                >
                  Total payment
                </Text>

                <Text
                  style={{
                    fontSize: 23,
                    color: '#218B42',
                    fontFamily: 'Inter_24pt-SemiBold',
                    marginTop: 2,
                  }}
                >
                  {order.total}
                </Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('OrderDetail')}
              accessibilityRole="button"
              accessibilityLabel="View order details"
              style={{
                width: 49,
                height: 49,
                borderRadius: 25,
                backgroundColor: '#32B44D',
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 2,
              }}
            >
              <Feather
                name="chevron-right"
                size={28}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Empty-state illustration */}
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 25,
            marginTop: 70,
            marginBottom: 30,
          }}
        >
          <View
            style={{
              width: 115,
              height: 115,
              borderRadius: 58,
              backgroundColor: '#F2F6FB',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 23,
            }}
          >
            <Feather
              name="clipboard"
              size={49}
              color="#8192A8"
            />

            <View
              style={{
                position: 'absolute',
                right: 5,
                bottom: 9,
                width: 35,
                height: 35,
                borderRadius: 18,
                backgroundColor: '#32B45B',
                borderWidth: 3,
                borderColor: '#FFFFFF',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Feather
                name="check"
                size={19}
                color="#FFFFFF"
              />
            </View>
          </View>

          <Text
            style={{
              fontFamily: 'Inter_24pt-SemiBold',
              fontSize: 22,
              color: '#1D2B3D',
              textAlign: 'center',
            }}
          >
            No more orders
          </Text>

          <Text
            style={{
              fontFamily: 'Inter_24pt-Medium',
              fontSize: 14,
              lineHeight: 23,
              color: '#7A899E',
              textAlign: 'center',
              marginTop: 10,
            }}
          >
            You're all caught up!
            {'\n'}New orders will appear here.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}