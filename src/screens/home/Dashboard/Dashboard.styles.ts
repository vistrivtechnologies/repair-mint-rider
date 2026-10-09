import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  screenContainer: {
    flex: 1,
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopColor: '#ecf0f1',
    borderTopWidth: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  navButton: {
    width: '20%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    width: 7,
    height: 7,
    backgroundColor: 'rgb(245,141,58)',
    borderRadius: 100,
    marginTop: 3,
  },
  seprator: {
    width: 7,
    height: 7,
    backgroundColor: 'rgb(245,141,58)',
    borderRadius: 100,
    marginTop: 3,
  },
});

export default styles;
