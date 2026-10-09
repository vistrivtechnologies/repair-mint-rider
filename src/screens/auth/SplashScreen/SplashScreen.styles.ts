import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, Fonts} from '../../../constant';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
  },
  topSection: {
    width: wp(80),
    backgroundColor: Colors.PRIMARY[200],
    height: hp(70),
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: 'center',
  },
  mainTitleText: {
    marginTop: hp(10),
    color: Colors.black,
    fontFamily: Fonts.semi_Bold,
    fontSize: scale(20),
    textAlign: 'center',
  },

  subTitleText: {
    color: Colors.black,
    textAlign: 'center',
    fontFamily: Fonts.Regular,
    padding: hp(2),
  },
  dividerLine: {
    width: wp(70),
    height: hp(0.25),
    backgroundColor: Colors.PRIMARY[100],
  },
  bottomSection: {
    height: hp(70),
    position: 'absolute',
    width: wp(100),
    bottom: 0,
    alignItems: 'center',
  },
  image: {
    width: 370,
    height: 350,
  },
  loginButton: {
    width: wp(80),
    height: 50,
    backgroundColor: Colors.PRIMARY[100],
    borderRadius: 10,
    marginTop: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'Inter_24pt-Bold',
    fontSize: 18,
    color: '#fff',
  },
  registrationButton: {
    width: wp(90),
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  registrationButtonText: {
    fontFamily: 'Inter_24pt-Medium',
    color: Colors.PRIMARY[100],
  },
});

export default styles;
