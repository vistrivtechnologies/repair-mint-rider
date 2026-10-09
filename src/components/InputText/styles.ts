import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../../constant';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  error: {
    fontSize: scale(10),
    fontFamily: Fonts.Regular,
    color: Colors.ERROR[100],
    marginTop: moderateVerticalScale(3),
  },
  labelText: {
    color: Colors.black,
    fontFamily: Fonts.Regular,
    fontSize: scale(12),
    marginBottom: moderateVerticalScale(7),
    marginLeft: wp(0.5),
  },
  inputBoxText: {
    fontFamily: Fonts.Regular,
    fontWeight: '500',
    width: wp(85),
    fontSize: scale(11),
    height: hp(5),
  },
  textBoxContainer: {
    backgroundColor: Colors.white,
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(6),
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: wp(2),
    paddingRight: wp(2),
    borderWidth: 0.5,
    borderColor: Colors.black,
    width: wp(85),
  },
  secureBtn: {
    position: 'absolute',
    right: 15,
    top: 20,
  },
  eyeStyle: {
    height: wp(5),
    width: wp(5),
    resizeMode: 'contain',
  },
});

export default styles;
