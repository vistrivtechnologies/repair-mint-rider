//
// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
//   StyleSheet,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import { useNavigation } from '@react-navigation/native';
//
// const ORANGE = '#F58D3A';
// const DARK = '#202D40';
// const MUTED = '#7B8798';
//
// export default function PendingOrder() {
//   const navigation = useNavigation<any>();
//
//   const order = {
//     id: '68sdfsdfdsgfdgdrffesdf',
//     date: '07-06-2015',
//     paymentStatus: 'COD - Pending',
//     total: '$185',
//   };
//
//   const openOrder = () => {
//     navigation.navigate('OrderDetail');
//   };
//
//   return (
//     <View style={styles.screen}>
//       <StatusBar
//         backgroundColor="#FFFFFF"
//         barStyle="dark-content"
//       />
//
//       <ScrollView
//         style={styles.scroll}
//         contentContainerStyle={styles.content}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Page heading */}
//         <View style={styles.header}>
//           <View style={styles.headerIcon}>
//             <Feather name="truck" size={25} color={ORANGE} />
//           </View>
//
//           <View style={styles.headerTextContainer}>
//             <Text style={styles.title}>Pending Orders</Text>
//             <Text style={styles.subtitle}>
//               Manage your assigned deliveries
//             </Text>
//           </View>
//
//           <View style={styles.statusCount}>
//             <View style={styles.statusDot} />
//             <Text style={styles.statusCountText}>Pending</Text>
//           </View>
//         </View>
//
//         {/* Section heading */}
//         <View style={styles.sectionHeading}>
//           <View>
//             <Text style={styles.sectionTitle}>Your orders</Text>
//             <Text style={styles.sectionSubtitle}>
//               Review details before proceeding
//             </Text>
//           </View>
//
//           <View style={styles.orderCount}>
//             <Text style={styles.orderCountText}>01</Text>
//           </View>
//         </View>
//
//         {/* Main order card */}
//         <View style={styles.card}>
//           {/* Orange accent */}
//           <View style={styles.accentLine} />
//
//           {/* Order ID */}
//           <View style={styles.cardHeader}>
//             <View style={styles.orderIcon}>
//               <Feather
//                 name="package"
//                 size={21}
//                 color={ORANGE}
//               />
//             </View>
//
//             <View style={styles.orderIdContainer}>
//               <Text style={styles.eyebrow}>ORDER ID</Text>
//               <Text style={styles.orderId}>{order.id}</Text>
//             </View>
//
//             <View style={styles.pendingBadge}>
//               <Feather
//                 name="clock"
//                 size={13}
//                 color="#D97722"
//               />
//               <Text style={styles.pendingText}>Pending</Text>
//             </View>
//           </View>
//
//           <View style={styles.divider} />
//
//           {/* Order date */}
//           <View style={styles.detailRow}>
//             <View style={styles.detailIcon}>
//               <Feather
//                 name="calendar"
//                 size={18}
//                 color={MUTED}
//               />
//             </View>
//
//             <View style={styles.detailTextContainer}>
//               <Text style={styles.detailLabel}>
//                 Order placed on
//               </Text>
//               <Text style={styles.detailValue}>
//                 {order.date}
//               </Text>
//             </View>
//           </View>
//
//           {/* Payment status */}
//           <View style={styles.detailRow}>
//             <View style={styles.detailIcon}>
//               <Feather
//                 name="credit-card"
//                 size={18}
//                 color={MUTED}
//               />
//             </View>
//
//             <View style={styles.detailTextContainer}>
//               <Text style={styles.detailLabel}>
//                 Payment status
//               </Text>
//               <Text style={styles.detailValue}>
//                 {order.paymentStatus}
//               </Text>
//             </View>
//           </View>
//
//           <View style={styles.divider} />
//
//           {/* Total and action */}
//           <View style={styles.bottomRow}>
//             <View style={styles.totalContainer}>
//               <Text style={styles.totalLabel}>TOTAL AMOUNT</Text>
//               <Text style={styles.totalAmount}>
//                 {order.total}
//               </Text>
//             </View>
//
//             <TouchableOpacity
//               onPress={openOrder}
//               activeOpacity={0.82}
//               accessibilityRole="button"
//               accessibilityLabel="View order details"
//               style={styles.viewButton}
//             >
//               <Text style={styles.viewButtonText}>
//                 View details
//               </Text>
//               <Feather
//                 name="arrow-up-right"
//                 size={18}
//                 color="#FFFFFF"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//
//         {/* Small support banner */}
//         <View style={styles.infoBanner}>
//           <View style={styles.infoIcon}>
//             <Feather
//               name="info"
//               size={18}
//               color="#647A96"
//             />
//           </View>
//
//           <View style={styles.infoTextContainer}>
//             <Text style={styles.infoTitle}>
//               Order information
//             </Text>
//             <Text style={styles.infoDescription}>
//               Open the order to view its details and
//               available actions.
//             </Text>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: '#F7F8FA',
//   },
//   scroll: {
//     paddingTop:55,
//     flex: 1,
//   },
//   content: {
//     paddingBottom: 24,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 18,
//     paddingVertical: 19,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ECEFF3',
//   },
//   headerIcon: {
//     width: 49,
//     height: 49,
//     borderRadius: 15,
//     backgroundColor: '#FFF1E5',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 12,
//   },
//   headerTextContainer: {
//     flex: 1,
//   },
//   title: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 19,
//     color: DARK,
//   },
//   subtitle: {
//     fontFamily: 'Inter_24pt-Medium',
//     fontSize: 11,
//     color: MUTED,
//     marginTop: 5,
//   },
//   statusCount: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF2E6',
//     borderRadius: 20,
//     paddingHorizontal: 9,
//     paddingVertical: 7,
//   },
//   statusDot: {
//     width: 6,
//     height: 6,
//     borderRadius: 3,
//     backgroundColor: ORANGE,
//     marginRight: 5,
//   },
//   statusCountText: {
//     fontSize: 10,
//     fontFamily: 'Inter_24pt-SemiBold',
//     color: '#C86E22',
//   },
//   sectionHeading: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginHorizontal: 18,
//     marginTop: 24,
//     marginBottom: 14,
//   },
//   sectionTitle: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 19,
//     color: DARK,
//   },
//   sectionSubtitle: {
//     fontFamily: 'Inter_24pt-Medium',
//     fontSize: 12,
//     color: MUTED,
//     marginTop: 5,
//   },
//   orderCount: {
//     width: 38,
//     height: 38,
//     borderRadius: 12,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#E8EBF0',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   orderCountText: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 13,
//     color: DARK,
//   },
//   card: {
//     marginHorizontal: 16,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 17,
//     borderWidth: 1,
//     borderColor: '#E9ECF1',
//     overflow: 'hidden',
//     elevation: 2,
//     shadowColor: '#26374A',
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     shadowOffset: { width: 0, height: 3 },
//   },
//   accentLine: {
//     height: 4,
//     backgroundColor: ORANGE,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     paddingVertical: 17,
//   },
//   orderIcon: {
//     width: 43,
//     height: 43,
//     borderRadius: 13,
//     backgroundColor: '#FFF3E8',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 11,
//   },
//   orderIdContainer: {
//     flex: 1,
//     marginRight: 7,
//   },
//   eyebrow: {
//     fontFamily: 'Inter_24pt-Medium',
//     fontSize: 10,
//     letterSpacing: 1,
//     color: MUTED,
//   },
//   orderId: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 12,
//     color: DARK,
//     marginTop: 6,
//   },
//   pendingBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF1E3',
//     paddingHorizontal: 9,
//     paddingVertical: 7,
//     borderRadius: 9,
//   },
//   pendingText: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 10,
//     color: '#D97722',
//     marginLeft: 5,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: '#EEF0F3',
//     marginHorizontal: 15,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 13,
//   },
//   detailIcon: {
//     width: 39,
//     height: 39,
//     borderRadius: 12,
//     backgroundColor: '#F4F6F9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 12,
//   },
//   detailTextContainer: {
//     flex: 1,
//   },
//   detailLabel: {
//     fontFamily: 'Inter_24pt-Medium',
//     fontSize: 11,
//     color: MUTED,
//   },
//   detailValue: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 13,
//     color: DARK,
//     marginTop: 5,
//   },
//   bottomRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//     paddingVertical: 15,
//   },
//   totalContainer: {
//     flex: 1,
//   },
//   totalLabel: {
//     fontFamily: 'Inter_24pt-Medium',
//     fontSize: 10,
//     letterSpacing: 0.7,
//     color: MUTED,
//   },
//   totalAmount: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 25,
//     color: ORANGE,
//     marginTop: 4,
//   },
//   viewButton: {
//     minHeight: 45,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: ORANGE,
//     paddingHorizontal: 14,
//     borderRadius: 12,
//     marginLeft: 10,
//   },
//   viewButtonText: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 12,
//     color: '#FFFFFF',
//     marginRight: 7,
//   },
//   infoBanner: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 16,
//     marginTop: 18,
//     padding: 14,
//     borderRadius: 14,
//     backgroundColor: '#FFFFFF',
//     borderWidth: 1,
//     borderColor: '#E9ECF1',
//   },
//   infoIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 11,
//     backgroundColor: '#F0F4F9',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 11,
//   },
//   infoTextContainer: {
//     flex: 1,
//   },
//   infoTitle: {
//     fontFamily: 'Inter_24pt-SemiBold',
//     fontSize: 12,
//     color: DARK,
//   },
//   infoDescription: {
//     fontFamily: 'Inter_24pt-Medium',
//     fontSize: 11,
//     lineHeight: 17,
//     color: MUTED,
//     marginTop: 4,
//   },
// });

























import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { UserService } from '../../../service/apiService';
import { LocalStorage } from '../../../helpers/localstorage';

const ORANGE = '#F58D3A';
const DARK = '#202D40';
const MUTED = '#7B8798';

type Order = {
  _id?: string;
  id?: string;
  createdAt?: string;
  serviceRequest?: {
    _id?: string;
    createdAt?: string;
    ticketStatus?: string;
    serviceRequestStatus?: string;
    paymentStatus?: string;
    totalAmount?: number;
    total?: number;
  };
  pickups?: Array<{
    _id?: string;
    pickupStatus?: string;
    createdAt?: string;
  }>;
  paymentStatus?: string;
  totalAmount?: number;
  total?: number;
  ticketStatus?: string;
  serviceRequestStatus?: string;
};

const getStoredToken = async (): Promise<string | null> => {
  const savedToken = await LocalStorage.read('@token');

  if (typeof savedToken === 'string' && savedToken.trim()) {
    return savedToken;
  }

  return null;
};
const formatDate = (value?: string) => {
  if (!value) return 'Date unavailable';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleDateString('en-GB');
};

const getOrderId = (order: Order) =>
  order.serviceRequest?._id ?? order._id ?? order.id ?? 'N/A';

const getOrderStatus = (order: Order) =>
  order.pickups?.[0]?.pickupStatus ??
  order.serviceRequest?.ticketStatus ??
  order.ticketStatus ??
  order.serviceRequest?.serviceRequestStatus ??
  order.serviceRequestStatus ??
  'Pending';

const getPaymentStatus = (order: Order) =>
  order.serviceRequest?.paymentStatus ??
  order.paymentStatus ??
  'Not available';

const getTotal = (order: Order) => {
  const amount =
    order.serviceRequest?.totalAmount ??
    order.serviceRequest?.total ??
    order.totalAmount ??
    order.total;

  return typeof amount === 'number' ? `₹${amount}` : '—';
};

export default function PendingOrder() {
  const navigation = useNavigation<any>();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchOrders = useCallback(async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setErrorMessage('');

      const token = await getStoredToken();

      if (!token) {
        setOrders([]);
        setErrorMessage(
          'Login token nahi mila. Apne login ke token storage key ko verify karein.'
        );
        return;
      }

      const response =
        await UserService.getAssignedServiceRequests(token);


      const list =
        response?.data?.data?.assignedServiceRequests ??
        response?.data?.assignedServiceRequests;

      if (Array.isArray(list)) {
        console.log(
          'FIRST ASSIGNED ORDER STRUCTURE:',
          JSON.stringify(list[0], null, 2),
        );

        setOrders(list);
        setErrorMessage('');
      } else {
        setOrders([]);
        setErrorMessage('Server response mein orders nahi mile.');
      }
    } catch (error: any) {
      console.log(
        'PENDING ORDERS SCREEN ERROR:',
        error?.response?.data ?? error?.message
      );

      setErrorMessage(
        error?.response?.status === 401
          ? 'Session expire ho gaya hai. Dobara login karein.'
          : error?.response?.status === 403
            ? 'Is account ko orders dekhne ki permission nahi hai.'
            : 'Orders load nahi ho paaye. Backend server aur connection check karein.'
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const openOrder = (order: Order) => {
    navigation.navigate('OrderDetail', { order });
  };

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <Feather name="truck" size={25} color={ORANGE} />
          </View>

          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>Pending Orders</Text>
            <Text style={styles.subtitle}>
              Manage your assigned deliveries
            </Text>
          </View>

          <View style={styles.statusCount}>
            <View style={styles.statusDot} />
            <Text style={styles.statusCountText}>Pending</Text>
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.sectionTitle}>Your orders</Text>
            <Text style={styles.sectionSubtitle}>
              Review details before proceeding
            </Text>
          </View>

          <View style={styles.orderCount}>
            <Text style={styles.orderCountText}>
              {String(orders.length).padStart(2, '0')}
            </Text>
          </View>
        </View>

        {loading ? (
          <View style={{ padding: 35, alignItems: 'center' }}>
            <ActivityIndicator size="large" color={ORANGE} />
            <Text style={{ color: MUTED, marginTop: 12 }}>
              Loading orders...
            </Text>
          </View>
        ) : errorMessage ? (
          <View style={styles.infoBanner}>
            <View style={styles.infoIcon}>
              <Feather name="alert-circle" size={18} color="#647A96" />
            </View>

            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>Unable to load orders</Text>
              <Text style={styles.infoDescription}>
                {errorMessage}
              </Text>

              <TouchableOpacity
                onPress={() => fetchOrders()}
                style={{ marginTop: 12 }}
              >
                <Text
                  style={{
                    color: ORANGE,
                    fontFamily: 'Inter_24pt-SemiBold',
                  }}
                >
                  Try again
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : orders.length === 0 ? (
          <View style={styles.infoBanner}>
            <View style={styles.infoIcon}>
              <Feather name="package" size={18} color="#647A96" />
            </View>

            <View style={styles.infoTextContainer}>
              <Text style={styles.infoTitle}>No assigned orders</Text>
              <Text style={styles.infoDescription}>
                Abhi tumhare account par koi assigned service request nahi hai.
              </Text>

              <TouchableOpacity
                onPress={() => fetchOrders()}
                style={{ marginTop: 12 }}
              >
                <Text
                  style={{
                    color: ORANGE,
                    fontFamily: 'Inter_24pt-SemiBold',
                  }}
                >
                  Refresh orders
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          orders.map((order, index) => {
            const orderDate =
              order.pickups?.[0]?.createdAt ??
              order.serviceRequest?.createdAt ??
              order.createdAt;

            const status = getOrderStatus(order);

            return (
              <View
                key={order._id ?? getOrderId(order) ?? index}
                style={[styles.card, { marginBottom: 16 }]}
              >
                <View style={styles.accentLine} />

                <View style={styles.cardHeader}>
                  <View style={styles.orderIcon}>
                    <Feather
                      name="package"
                      size={21}
                      color={ORANGE}
                    />
                  </View>

                  <View style={styles.orderIdContainer}>
                    <Text style={styles.eyebrow}>ORDER ID</Text>
                    <Text style={styles.orderId} numberOfLines={1}>
                      {getOrderId(order)}
                    </Text>
                  </View>

                  <View style={styles.pendingBadge}>
                    <Feather
                      name="clock"
                      size={13}
                      color="#D97722"
                    />
                    <Text style={styles.pendingText}>
                      {status}
                    </Text>
                  </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.detailRow}>
                  <View style={styles.detailIcon}>
                    <Feather
                      name="calendar"
                      size={18}
                      color={MUTED}
                    />
                  </View>

                  <View style={styles.detailTextContainer}>
                    <Text style={styles.detailLabel}>
                      Order placed on
                    </Text>
                    <Text style={styles.detailValue}>
                      {formatDate(orderDate)}
                    </Text>
                  </View>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.detailIcon}>
                    <Feather
                      name="credit-card"
                      size={18}
                      color={MUTED}
                    />
                  </View>

                  <View style={styles.detailTextContainer}>
                    <Text style={styles.detailLabel}>
                      Payment status
                    </Text>
                    <Text style={styles.detailValue}>
                      {getPaymentStatus(order)}
                    </Text>
                  </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.bottomRow}>
                  <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>
                      TOTAL AMOUNT
                    </Text>
                    <Text style={styles.totalAmount}>
                      {getTotal(order)}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => openOrder(order)}
                    activeOpacity={0.82}
                    accessibilityRole="button"
                    accessibilityLabel="View order details"
                    style={styles.viewButton}
                  >
                    <Text style={styles.viewButtonText}>
                      View details
                    </Text>
                    <Feather
                      name="arrow-up-right"
                      size={18}
                      color="#FFFFFF"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })
        )}

        <View style={styles.infoBanner}>
          <View style={styles.infoIcon}>
            <Feather name="info" size={18} color="#647A96" />
          </View>

          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Order information</Text>
            <Text style={styles.infoDescription}>
              Open the order to view its details and available actions.
            </Text>
          </View>
        </View>

        {!loading && (
          <TouchableOpacity
            onPress={() => fetchOrders(true)}
            disabled={refreshing}
            style={{
              alignSelf: 'center',
              marginTop: 16,
              marginBottom: 8,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {refreshing ? (
              <ActivityIndicator size="small" color={ORANGE} />
            ) : (
              <Feather name="refresh-cw" size={15} color={ORANGE} />
            )}

            <Text
              style={{
                color: ORANGE,
                marginLeft: 7,
                fontFamily: 'Inter_24pt-SemiBold',
              }}
            >
              {refreshing ? 'Refreshing...' : 'Refresh orders'}
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  scroll: {
    paddingTop:55,
    flex: 1,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingVertical: 19,
    borderBottomWidth: 1,
    borderBottomColor: '#ECEFF3',
  },
  headerIcon: {
    width: 49,
    height: 49,
    borderRadius: 15,
    backgroundColor: '#FFF1E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTextContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 19,
    color: DARK,
  },
  subtitle: {
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 11,
    color: MUTED,
    marginTop: 5,
  },
  statusCount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF2E6',
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: ORANGE,
    marginRight: 5,
  },
  statusCountText: {
    fontSize: 10,
    fontFamily: 'Inter_24pt-SemiBold',
    color: '#C86E22',
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 24,
    marginBottom: 14,
  },
  sectionTitle: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 19,
    color: DARK,
  },
  sectionSubtitle: {
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 12,
    color: MUTED,
    marginTop: 5,
  },
  orderCount: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8EBF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderCountText: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 13,
    color: DARK,
  },
  card: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E9ECF1',
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#26374A',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  accentLine: {
    height: 4,
    backgroundColor: ORANGE,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 17,
  },
  orderIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: '#FFF3E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  orderIdContainer: {
    flex: 1,
    marginRight: 7,
  },
  eyebrow: {
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 10,
    letterSpacing: 1,
    color: MUTED,
  },
  orderId: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 12,
    color: DARK,
    marginTop: 6,
  },
  pendingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF1E3',
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 9,
  },
  pendingText: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 10,
    color: '#D97722',
    marginLeft: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF0F3',
    marginHorizontal: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 13,
  },
  detailIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  detailTextContainer: {
    flex: 1,
  },
  detailLabel: {
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 11,
    color: MUTED,
  },
  detailValue: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 13,
    color: DARK,
    marginTop: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  totalContainer: {
    flex: 1,
  },
  totalLabel: {
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 10,
    letterSpacing: 0.7,
    color: MUTED,
  },
  totalAmount: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 25,
    color: ORANGE,
    marginTop: 4,
  },
  viewButton: {
    minHeight: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ORANGE,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginLeft: 10,
  },
  viewButtonText: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    marginRight: 7,
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 18,
    padding: 14,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E9ECF1',
  },
  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: '#F0F4F9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 12,
    color: DARK,
  },
  infoDescription: {
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 11,
    lineHeight: 17,
    color: MUTED,
    marginTop: 4,
  },
});