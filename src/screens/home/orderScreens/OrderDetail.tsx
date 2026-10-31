// import {View, Text, TouchableOpacity, Image} from 'react-native';
// import React from 'react';
// import {ScrollView} from 'react-native-gesture-handler';
// import Feather from 'react-native-vector-icons/Feather';
//
// export default function OrderDetail() {
//   return (
//     <View style={{backgroundColor: '#fff', flex: 1}}>
//       <ScrollView
//         style={{flexDirection: 'column'}}
//         contentContainerStyle={{alignItems: 'center'}}>
//         <View
//           style={{
//             width: '90%',
//             height: 40,
//             marginTop: 20,
//             flexDirection: 'row',
//           }}>
//           <View
//             style={{
//               width: '20%',
//               height: '100%',
//               flexDirection: 'column',
//               justifyContent: 'center',
//             }}>
//             <Feather name="arrow-left" size={25} color="#000" />
//           </View>
//           <View
//             style={{
//               width: '60%',
//               height: '100%',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontFamily: 'Inter_24pt-SemiBold',
//                 color: '#000',
//                 fontSize: 18,
//               }}>
//               Order Detail
//             </Text>
//           </View>
//           <View style={{width: '20%', height: '100%'}}></View>
//         </View>
//
//         <View
//           style={{
//             width: '95%',
//             marginTop: 10,
//             borderRadius: 10,
//             borderColor: '#C9C9C9',
//             borderWidth: 1,
//             flexDirection: 'row',
//           }}>
//           <View style={{width: '100%'}}>
//             <View
//               style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//               <View style={{marginTop: 10}}>
//                 <Text
//                   style={{
//                     fontFamily: 'Inter_24pt-SemiBold',
//                     color: '#000',
//                     marginLeft: 15,
//                     fontSize: 15,
//                   }}>
//                   Order ID
//                 </Text>
//                 <Text
//                   style={{
//                     marginLeft: 15,
//                     fontFamily: 'Inter_24pt-Medium',
//                     fontSize: 14,
//                     color: '#d0d0d0',
//                   }}>
//                   68sdfsdfdsgfdgdrffesdf
//                 </Text>
//               </View>
//               <View
//                 style={{
//                   width: 120,
//                   height: 40,
//                   backgroundColor: 'rgb(245,141,58)',
//                   borderTopRightRadius: 10,
//                   borderBottomLeftRadius: 10,
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}>
//                 <Text style={{fontFamily: 'Inter_24pt-Medium', color: '#fff'}}>
//                   Pending
//                 </Text>
//               </View>
//             </View>
//             <View style={{marginTop: 10, flexDirection: 'row'}}>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-SemiBold',
//                   color: '#000',
//                   marginLeft: 15,
//                   fontSize: 15,
//                 }}>
//                 Order Place On :
//               </Text>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-Medium',
//                   fontSize: 14,
//                   color: '#d0d0d0',
//                   marginTop: 2,
//                   marginLeft: 3,
//                 }}>
//                 07-06-2015
//               </Text>
//             </View>
//
//             <View style={{marginTop: 10, flexDirection: 'row'}}>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-SemiBold',
//                   color: '#000',
//                   marginLeft: 15,
//                   fontSize: 15,
//                 }}>
//                 Quantity :
//               </Text>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-Medium',
//                   fontSize: 14,
//                   color: '#d0d0d0',
//                   marginTop: 2,
//                   marginLeft: 3,
//                 }}>
//                 01
//               </Text>
//             </View>
//             <View style={{marginTop: 10, flexDirection: 'row'}}>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-SemiBold',
//                   color: '#000',
//                   marginLeft: 15,
//                   fontSize: 15,
//                 }}>
//                 Name :
//               </Text>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-Medium',
//                   fontSize: 14,
//                   color: '#d0d0d0',
//                   marginTop: 2,
//                   marginLeft: 3,
//                 }}>
//                 Janey Depth
//               </Text>
//             </View>
//
//             <View style={{marginTop: 10, flexDirection: 'row'}}>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-SemiBold',
//                   color: '#000',
//                   marginLeft: 15,
//                   fontSize: 15,
//                 }}>
//                 Email :
//               </Text>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-Medium',
//                   fontSize: 14,
//                   color: '#d0d0d0',
//                   marginTop: 2,
//                   marginLeft: 3,
//                 }}>
//                 joney@gmail.com
//               </Text>
//             </View>
//
//             <View style={{marginTop: 10, flexDirection: 'row'}}>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-SemiBold',
//                   color: '#000',
//                   marginLeft: 15,
//                   fontSize: 15,
//                 }}>
//                 Mobile No :
//               </Text>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-Medium',
//                   fontSize: 14,
//                   color: '#d0d0d0',
//                   marginTop: 2,
//                   marginLeft: 3,
//                 }}>
//                 +9185245555
//               </Text>
//             </View>
//
//             <View style={{marginTop: 10, flexDirection: 'row'}}>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-SemiBold',
//                   color: '#000',
//                   marginLeft: 15,
//                   fontSize: 15,
//                 }}>
//                 Address :
//               </Text>
//               <Text
//                 style={{
//                   fontFamily: 'Inter_24pt-Medium',
//                   fontSize: 14,
//                   color: '#d0d0d0',
//                   marginTop: 2,
//                   marginLeft: 3,
//                   width: '80%',
//                 }}>
//                 Shubhas Nagar Pagara Road Near Warehouse Sagar (M.P)
//               </Text>
//             </View>
//
//             <View style={{flexDirection: 'row', width: '100%'}}>
//               <View style={{marginTop: 10, width: '60%'}}>
//                 <Text
//                   style={{
//                     fontFamily: 'Inter_24pt-SemiBold',
//                     color: '#000',
//                     marginLeft: 15,
//                     fontSize: 15,
//                   }}>
//                   Payment Status{' '}
//                 </Text>
//                 <Text
//                   style={{
//                     fontFamily: 'Inter_24pt-Medium',
//                     fontSize: 14,
//                     color: '#d0d0d0',
//                     marginTop: 2,
//                     marginLeft: 15,
//                   }}>
//                   COD - Pending
//                 </Text>
//               </View>
//
//               <View
//                 style={{
//                   marginTop: 10,
//                   flexDirection: 'row',
//                   width: '40%',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   height: 50,
//                 }}>
//                 <Text
//                   style={{
//                     fontFamily: 'Inter_24pt-SemiBold',
//                     color: '#000',
//                     marginLeft: 15,
//                     fontSize: 20,
//                   }}>
//                   Total :
//                 </Text>
//                 <Text
//                   style={{
//                     fontFamily: 'Inter_24pt-SemiBold',
//                     color: 'rgb(245,141,58)',
//                     marginTop: 2,
//                     marginLeft: 5,
//                     fontSize: 20,
//                   }}>
//                   $185
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>
//
//         <View
//           style={{
//             width: '95%',
//             height: 120,
//             borderColor: '#C9C9C9',
//             borderWidth: 1,
//             marginTop: 20,
//             borderRadius: 20,
//             flexDirection: 'row',
//           }}>
//           <View
//             style={{
//               width: '35%',
//               height: '100%',
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <View
//               style={{
//                 width: '90%',
//                 height: '90%',
//                 backgroundColor: '#f6f6f6',
//                 borderRadius: 10,
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Image
//                 source={{
//                   uri: 'https://5.imimg.com/data5/PX/WQ/MN/SELLER-38271709/mobile.png',
//                 }}
//                 style={{width: 70, height: 100}}
//               />
//             </View>
//           </View>
//
//           <View
//             style={{
//               flexDirection: 'column',
//               justifyContent: 'center',
//               width: '65%',
//             }}>
//             <Text
//               numberOfLines={2}
//               style={{
//                 fontFamily: 'Inter_24pt-SemiBold',
//                 marginLeft: 5,
//                 color: '#000',
//               }}>
//               Samsung Galaxy Note 9 pro{' '}
//             </Text>
//             <Text
//               style={{
//                 marginLeft: 5,
//                 fontFamily: 'Inter_24pt-Medium',
//                 color: '#C9C9C9',
//                 fontSize: 14,
//               }}>
//               Internal 1TB
//             </Text>
//             <Text
//               numberOfLines={2}
//               style={{
//                 fontFamily: 'Inter_24pt-SemiBold',
//                 marginLeft: 5,
//                 color: 'rgb(245,141,58)',
//               }}>
//               $ 150{' '}
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//
//       <View
//         style={{
//           position: 'absolute',
//           height: 50,
//           bottom: 0,
//           width: '100%',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           marginBottom: 10,
//         }}>
//         <View
//           style={{
//             width: '90%',
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//           }}>
//           <TouchableOpacity
//             style={{
//               width: '45%',
//               height: 50,
//               backgroundColor: '#3dba42',
//               borderRadius: 10,
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontFamily: 'Inter_24pt-SemiBold',
//                 fontSize: 18,
//                 color: '#fff',
//               }}>
//               Accept
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               width: '45%',
//               height: 50,
//               backgroundColor: '#c91507',
//               borderRadius: 10,
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontFamily: 'Inter_24pt-SemiBold',
//                 fontSize: 18,
//                 color: '#fff',
//               }}>
//               Reject
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }











import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  TextInput,
  Modal,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserService } from '../../../service/apiService';
import { LocalStorage } from '../../../helpers/localstorage';

type ServiceRequest = {
  _id?: string;
  ticketStatus?: string;
  createdAt?: string;
  issueDescription?: string;
  description?: string;
  serviceMode?: string;
  customer?: any;
  customerDetails?: any;
  address?: any;
  paymentStatus?: string;
  totalAmount?: number | string;
  amount?: number | string;
  [key: string]: any;
};

export default function OrderDetail() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const order = route.params?.order;
  const request: ServiceRequest | undefined =
    order?.serviceRequest ?? order;
    const [approvalLoading, setApprovalLoading] = useState(false);
    const [rejectModalVisible, setRejectModalVisible] = useState(false);
    const [rejectionComment, setRejectionComment] = useState('');

    const submitApproval = async (
      approvalStatus: 'APPROVED' | 'REJECTED',
      comment?: string,
    ) => {
      if (!order?._id) {
        Alert.alert(
          'Unable to process',
          'Service request approval ID nahi mila.',
        );
        return;
      }

      if (approvalStatus === 'REJECTED' && !comment?.trim()) {
        Alert.alert('Required', 'Please rejection reason enter karo.');
        return;
      }

      try {
        setApprovalLoading(true);

        const savedToken = await LocalStorage.read('@token');
        const token =
          typeof savedToken === 'string' ? savedToken.trim() : '';

        if (!token) {
          Alert.alert('Session expired', 'Please login karke dobara try karo.');
          return;
        }

        const payload: {
          serviceRequestApprovalId: string;
          approvalStatus: 'APPROVED' | 'REJECTED';
          rejectionComment?: string;
        } = {
          serviceRequestApprovalId: order._id,
          approvalStatus,
        };

        if (approvalStatus === 'REJECTED') {
          payload.rejectionComment = comment!.trim();
        }

        await UserService.updateServiceRequestApproval(payload, token);

        setRejectModalVisible(false);
        setRejectionComment('');

        Alert.alert(
          'Success',
          approvalStatus === 'APPROVED'
            ? 'Order successfully accepted.'
            : 'Order successfully rejected.',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ],
        );
      } catch (error: any) {
        console.log('ORDER APPROVAL FAILED:', error?.message);

        Alert.alert(
          'Request failed',
          error?.response?.data?.message ??
            error?.message ??
            'Order update nahi ho saka. Please try again.',
        );
      } finally {
        setApprovalLoading(false);
      }
    };

  if (!request) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}>
        <Feather name="alert-circle" size={40} color="#F58D3A" />
        <Text style={{ color: '#222', fontSize: 16, marginTop: 12 }}>
          Order details are not available.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: '#F58D3A',
            paddingHorizontal: 24,
            paddingVertical: 12,
            borderRadius: 8,
            marginTop: 16,
          }}>
          <Text style={{ color: '#fff', fontWeight: '600' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const customer =
    request.customerDetails ?? request.customer ?? request.user ?? {};

  const customerName =
    customer?.name ??
    customer?.userName ??
    customer?.fullName ??
    request.customerName ??
    'Not available';

  const email =
    customer?.email ?? request.email ?? 'Not available';

  const phone =
    customer?.phoneNumber ??
    customer?.mobileNumber ??
    customer?.phone ??
    request.phoneNumber ??
    'Not available';

  const addressValue =
    request.address ??
    customer?.address ??
    request.serviceAddress;

  const address =
    typeof addressValue === 'string'
      ? addressValue
      : addressValue
        ? [
            addressValue.addressLine1,
            addressValue.addressLine2,
            addressValue.street,
            addressValue.city,
            addressValue.state,
            addressValue.pincode,
          ]
            .filter(Boolean)
            .join(', ')
        : 'Not available';

  const orderId = request._id ?? request.serviceRequestId ?? 'Not available';
  const status = request.ticketStatus ?? order?.approvalStatus ?? 'Pending';
  const description =
    request.issueDescription ??
    request.description ??
    request.problemDescription ??
    request.serviceDescription ??
    'Service details not available';

  const serviceMode =
    request.serviceMode ??
    request.serviceType ??
    request.mode ??
    'Not available';

  const createdAt = request.createdAt
    ? new Date(request.createdAt).toLocaleDateString('en-GB')
    : 'Not available';

  const paymentStatus = request.paymentStatus ?? 'Not available';
  const amount = request.totalAmount ?? request.amount;

  const DetailRow = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => (
    <View
      style={{
        marginTop: 12,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}>
      <Text
        style={{
          fontFamily: 'Inter_24pt-SemiBold',
          color: '#000',
          fontSize: 14,
        }}>
        {label} :{' '}
      </Text>
      <Text
        style={{
          flex: 1,
          fontFamily: 'Inter_24pt-Medium',
          fontSize: 14,
          color: '#999',
        }}>
        {value || 'Not available'}
      </Text>
    </View>
  );

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 90,
        }}>
        <View
          style={{
            width: '90%',
            height: 45,
            marginTop: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: '20%',
              justifyContent: 'center',
            }}>
            <Feather name="arrow-left" size={25} color="#000" />
          </TouchableOpacity>

          <View
            style={{
              width: '60%',
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
          <View style={{ width: '20%' }} />
        </View>

        <View
          style={{
            width: '95%',
            marginTop: 10,
            borderRadius: 10,
            borderColor: '#C9C9C9',
            borderWidth: 1,
            paddingBottom: 14,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
            <View style={{ flex: 1, marginTop: 10 }}>
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
                selectable
                style={{
                  marginLeft: 15,
                  marginTop: 3,
                  fontFamily: 'Inter_24pt-Medium',
                  fontSize: 13,
                  color: '#999',
                }}>
                {String(orderId)}
              </Text>
            </View>

            <View
              style={{
                maxWidth: 145,
                minWidth: 100,
                minHeight: 40,
                paddingHorizontal: 12,
                backgroundColor: '#F58D3A',
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Inter_24pt-Medium',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                {String(status)}
              </Text>
            </View>
          </View>

          <DetailRow label="Order Placed On" value={createdAt} />
          <DetailRow label="Customer" value={String(customerName)} />
          <DetailRow label="Email" value={String(email)} />
          <DetailRow label="Mobile No" value={String(phone)} />
          <DetailRow label="Address" value={String(address)} />
          <DetailRow label="Service Mode" value={String(serviceMode)} />
          <DetailRow label="Issue" value={String(description)} />
          <DetailRow label="Payment Status" value={String(paymentStatus)} />

          <View
            style={{
              marginTop: 14,
              marginHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#777',
                fontSize: 12,
                flex: 1,
              }}>
              Actual service request details
            </Text>
            {amount !== undefined && amount !== null && amount !== '' ? (
              <Text
                style={{
                  fontFamily: 'Inter_24pt-SemiBold',
                  color: '#F58D3A',
                  fontSize: 18,
                }}>
                Total: {String(amount)}
              </Text>
            ) : (
              <Text style={{ color: '#999', fontSize: 13 }}>
                Total: Not available
              </Text>
            )}
          </View>
        </View>

        <View
          style={{
            width: '95%',
            marginTop: 18,
            padding: 16,
            borderColor: '#C9C9C9',
            borderWidth: 1,
            borderRadius: 16,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: '#FFF2E7',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Feather name="tool" size={24} color="#F58D3A" />
          </View>
          <View style={{ flex: 1, marginLeft: 14 }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                color: '#222',
                fontSize: 15,
              }}>
              Service Request
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: '#777',
                fontSize: 13,
              }}>
              {String(description)}
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: '#F58D3A',
                fontSize: 13,
              }}>
              Mode: {String(serviceMode)}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingVertical: 10,
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => submitApproval('APPROVED')}
            disabled={approvalLoading}
            style={{
              width: '48%',
              minHeight: 50,
              backgroundColor: '#3DBA42',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                fontSize: 17,
                color: '#fff',
              }}>
              Accept
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setRejectModalVisible(true)}
            disabled={approvalLoading}
            style={{
              width: '48%',
              minHeight: 50,
              backgroundColor: '#C91507',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Inter_24pt-SemiBold',
                fontSize: 17,
                color: '#fff',
              }}>
              Reject
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Reject Order Modal */}
      <Modal
        visible={rejectModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setRejectModalVisible(false)}>

<View
  style={{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    padding: 24,
  }}>
  <View
    style={{
      backgroundColor: '#fff',
      borderRadius: 16,
      padding: 20,
    }}>
    <Text style={{ fontSize: 19, fontWeight: '700', color: '#222' }}>
      Reject Order
    </Text>

    <Text style={{ color: '#777', marginTop: 8, marginBottom: 14 }}>
      Rejection ka reason enter karo.
    </Text>

    <TextInput
      value={rejectionComment}
      onChangeText={setRejectionComment}
      placeholder="Enter rejection reason"
      multiline
      editable={!approvalLoading}
      textAlignVertical="top"
      style={{
        minHeight: 100,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 12,
        color: '#222',
      }}
    />

    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 18 }}>
      <TouchableOpacity
        disabled={approvalLoading}
        onPress={() => {
          setRejectModalVisible(false);
          setRejectionComment('');
        }}
        style={{ padding: 12, backgroundColor: '#eee', borderRadius: 8 }}>
        <Text style={{ color: '#333' }}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={approvalLoading}
        onPress={() => submitApproval('REJECTED', rejectionComment)}
        style={{ padding: 12, backgroundColor: '#C91507', borderRadius: 8 }}>
        {approvalLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={{ color: '#fff', fontWeight: '600' }}>
            Confirm Reject
          </Text>
        )}
      </TouchableOpacity>
    </View>
  </View>
</View>
      </Modal>
    </View>
  );
}
