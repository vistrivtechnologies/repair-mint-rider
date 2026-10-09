import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export default function OrderDetail() {
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ScrollView
        style={{flexDirection: 'column'}}
        contentContainerStyle={{alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            height: 40,
            marginTop: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '20%',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Feather name="arrow-left" size={25} color="#000" />
          </View>
          <View
            style={{
              width: '60%',
              height: '100%',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                color: '#000',
                fontSize: 18,
              }}>
              Order Detail
            </Text>
          </View>
          <View style={{width: '20%', height: '100%'}}></View>
        </View>

        <View
          style={{
            width: '95%',
            marginTop: 10,
            borderRadius: 10,
            borderColor: '#C9C9C9',
            borderWidth: 1,
            flexDirection: 'row',
          }}>
          <View style={{width: '100%'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    fontFamily: 'Inter_24pt-SemiBold',
                    color: '#000',
                    marginLeft: 15,
                    fontSize: 15,
                  }}>
                  Order ID
                </Text>
                <Text
                  style={{
                    marginLeft: 15,
                    fontFamily: 'Inter_24pt-Medium',
                    fontSize: 14,
                    color: '#d0d0d0',
                  }}>
                  68sdfsdfdsgfdgdrffesdf
                </Text>
              </View>
              <View
                style={{
                  width: 120,
                  height: 40,
                  backgroundColor: 'rgb(245,141,58)',
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontFamily: 'Inter_24pt-Medium', color: '#fff'}}>
                  Pending
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  color: '#000',
                  marginLeft: 15,
                  fontSize: 15,
                }}>
                Order Place On :
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 14,
                  color: '#d0d0d0',
                  marginTop: 2,
                  marginLeft: 3,
                }}>
                07-06-2015
              </Text>
            </View>

            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  color: '#000',
                  marginLeft: 15,
                  fontSize: 15,
                }}>
                Quantity :
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 14,
                  color: '#d0d0d0',
                  marginTop: 2,
                  marginLeft: 3,
                }}>
                01
              </Text>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  color: '#000',
                  marginLeft: 15,
                  fontSize: 15,
                }}>
                Name :
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 14,
                  color: '#d0d0d0',
                  marginTop: 2,
                  marginLeft: 3,
                }}>
                Janey Depth
              </Text>
            </View>

            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  color: '#000',
                  marginLeft: 15,
                  fontSize: 15,
                }}>
                Email :
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 14,
                  color: '#d0d0d0',
                  marginTop: 2,
                  marginLeft: 3,
                }}>
                joney@gmail.com
              </Text>
            </View>

            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  color: '#000',
                  marginLeft: 15,
                  fontSize: 15,
                }}>
                Mobile No :
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 14,
                  color: '#d0d0d0',
                  marginTop: 2,
                  marginLeft: 3,
                }}>
                +9185245555
              </Text>
            </View>

            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  color: '#000',
                  marginLeft: 15,
                  fontSize: 15,
                }}>
                Address :
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 14,
                  color: '#d0d0d0',
                  marginTop: 2,
                  marginLeft: 3,
                  width: '80%',
                }}>
                Shubhas Nagar Pagara Road Near Warehouse Sagar (M.P)
              </Text>
            </View>

            <View style={{flexDirection: 'row', width: '100%'}}>
              <View style={{marginTop: 10, width: '60%'}}>
                <Text
                  style={{
                    fontFamily: 'Inter_24pt-SemiBold',
                    color: '#000',
                    marginLeft: 15,
                    fontSize: 15,
                  }}>
                  Payment Status{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Inter_24pt-Medium',
                    fontSize: 14,
                    color: '#d0d0d0',
                    marginTop: 2,
                    marginLeft: 15,
                  }}>
                  COD - Pending
                </Text>
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 50,
                }}>
                <Text
                  style={{
                    fontFamily: 'Inter_24pt-SemiBold',
                    color: '#000',
                    marginLeft: 15,
                    fontSize: 20,
                  }}>
                  Total :
                </Text>
                <Text
                  style={{
                    fontFamily: 'Inter_24pt-SemiBold',
                    color: 'rgb(245,141,58)',
                    marginTop: 2,
                    marginLeft: 5,
                    fontSize: 20,
                  }}>
                  $185
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '95%',
            height: 120,
            borderColor: '#C9C9C9',
            borderWidth: 1,
            marginTop: 20,
            borderRadius: 20,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '35%',
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '90%',
                height: '90%',
                backgroundColor: '#f6f6f6',
                borderRadius: 10,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://5.imimg.com/data5/PX/WQ/MN/SELLER-38271709/mobile.png',
                }}
                style={{width: 70, height: 100}}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              width: '65%',
            }}>
            <Text
              numberOfLines={2}
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                marginLeft: 5,
                color: '#000',
              }}>
              Samsung Galaxy Note 9 pro{' '}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontFamily: 'Inter_24pt-Medium',
                color: '#C9C9C9',
                fontSize: 14,
              }}>
              Internal 1TB
            </Text>
            <Text
              numberOfLines={2}
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                marginLeft: 5,
                color: 'rgb(245,141,58)',
              }}>
              $ 150{' '}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          height: 50,
          bottom: 0,
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              width: '45%',
              height: 50,
              backgroundColor: '#3dba42',
              borderRadius: 10,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                fontSize: 18,
                color: '#fff',
              }}>
              Accept
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '45%',
              height: 50,
              backgroundColor: '#c91507',
              borderRadius: 10,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                fontSize: 18,
                color: '#fff',
              }}>
              Reject
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
