import {StyleSheet} from 'react-native';
import {Colors, Typography} from '../../constant';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: hp(5),
    borderRadius:50,
    elevation:5
  },
  tabButtons: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: hp(100),
  },
  buttonTextStyle: {
    ...Typography.BodyRegular14,
  },
});

export default styles;
