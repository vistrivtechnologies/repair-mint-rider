import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {scale, moderateVerticalScale} from 'react-native-size-matters';
import {Fonts, Colors} from '../../../constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    
  },

  logo: {
    height: hp(10),
    width: wp(90),
    resizeMode: 'contain',
    marginTop: hp(15),
    alignSelf:'center'
  },
  image: {
    width: 370,
    height: 350,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    width:wp(98),
    borderRadius: scale(7),
    overflow: 'hidden',
  },
  mainTextStyle: {
    color: Colors.black,
    fontSize: scale(18),
    textAlign: 'center',
    fontFamily: Fonts.Bold,
    marginBottom: moderateVerticalScale(10),
  },
  inputView: {
    padding: hp(2),
    marginTop: hp(1),
  },

  InputMainView: {
    marginTop: hp(1),
    width: wp(85),
    alignSelf: 'center',
  },

  textInput: {
    marginBottom: hp(1),
  },
  fadeTextStyle: {
    textAlign: 'center',
    marginTop: moderateVerticalScale(30),
    fontSize: scale(12),
    fontFamily: Fonts.Regular,
    color: Colors.greyColor,
  },
  orText: {
    marginTop: hp(2),
    textAlign: 'center',
    fontFamily: Fonts.Regular,
    color: Colors.black,
    fontSize: scale(12),
    fontWeight: '500',
  },
  actionButton: {
    marginTop: hp(2),
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    fontFamily: Fonts.Regular,
    marginTop: hp(0.5),
  },
});

export default styles;
