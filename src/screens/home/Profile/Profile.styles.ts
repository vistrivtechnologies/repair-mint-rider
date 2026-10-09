import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  scrollContent: {
    alignItems: 'center',
  },
  loadingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  loadingText: {
    fontFamily: 'Inter_24pt-SemiBold',
    color: '#000',
  },
  header: {
    width: '90%',
    marginTop: 12,
  },
  headerText: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 19,
    color: '#000',
  },
  infoContainer: {
    width: wp(90),
    marginTop: 20,
  },
  infoRow: {
    width: wp(100),
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#eeee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: wp(20),
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTextContainer: {
    width: wp(60),
    justifyContent: 'center',
  },
  infoText: {
    marginLeft: 10,
    color: '#000',
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 14,
  },
  statusContainer: {
    width: wp(90),
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusTextContainer: {
    width: wp(50),
    justifyContent: 'center',
  },
  statusTitle: {
    fontFamily: 'Inter_24pt-SemiBold',
    color: '#000',
  },
  statusValue: {
    color: '#c7c7c7',
    fontFamily: 'Inter_24pt-SemiBold',
  },
  logoutButton: {
    width: wp(90),
    borderColor: '#eeee',
    borderWidth: 1,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoutText: {
    marginLeft: 20,
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 16,
    color: 'rgb(245,141,58)',
  },
  logoutIcon: {
    marginRight: 15,
  },
});

export default styles;
