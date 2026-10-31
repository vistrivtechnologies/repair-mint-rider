
import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FAFF',
  },

  keyboardArea: {
    flex: 1,
  },

  waveContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: hp(23),
    overflow: 'hidden',
  },

  cyanWave: {
    position: 'absolute',
    top: -hp(1),
    left: -wp(35),
    width: wp(175),
    height: hp(26),
    backgroundColor: '#38BDF8',
    borderBottomLeftRadius: wp(75),
    borderBottomRightRadius: wp(75),
    transform: [{ rotate: '-5deg' }],
  },

  blueWave: {
    position: 'absolute',
    top: -hp(2),
    left: -wp(35),
    width: wp(175),
    height: hp(24),
    backgroundColor: '#0867E8',
    borderBottomLeftRadius: wp(72),
    borderBottomRightRadius: wp(72),
    transform: [{ rotate: '-5deg' }],
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: hp(4),
    alignItems: 'center',
  },

  form: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: wp(6.5),
    paddingTop: hp(17),
  },

  logo: {
    width: wp(48),
    height: hp(8),
    alignSelf: 'center',
    marginBottom: hp(1),
  },

  title: {
    fontFamily: 'Inter_24pt-Bold',
    fontSize: 25,
    color: '#15315D',
    textAlign: 'center',
    marginTop: hp(1),
  },

  subtitle: {
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 14,
    color: '#7186A8',
    textAlign: 'center',
    marginTop: hp(0.8),
    marginBottom: hp(2.5),
  },

  field: {
    width: '100%',
    marginTop: hp(1.1),
  },

  fieldLabel: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 14,
    color: '#15315D',
    marginBottom: hp(0.3),
  },

  fieldInput: {
    width: '100%',
    height: hp(5.4),
    paddingHorizontal: wp(2),
    paddingVertical: 0,
    color: '#15315D',
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 15,
  },

  underline: {
    width: '100%',
    height: 2,
    backgroundColor: '#38BDF8',
  },

  phoneRow: {
    width: '100%',
    height: hp(5.4),
    flexDirection: 'row',
    alignItems: 'center',
  },

  countryButton: {
    width: wp(17),
    height: '82%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#A8BAD3',
  },

  countryCode: {
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 15,
    color: '#15315D',
  },

  phoneInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: wp(4),
    color: '#15315D',
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 15,
  },

  sendOtpButton: {
    width: '100%',
    height: hp(6.2),
    marginTop: hp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#0867E8',
    borderRadius: 12,
    backgroundColor: 'transparent',
  },

  sendOtpText: {
    fontFamily: 'Inter_24pt-Bold',
    fontSize: 16,
    color: '#0867E8',
  },

  registerButton: {
    width: '100%',
    height: hp(6.5),
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0867E8',
    borderRadius: 12,
  },

  registerText: {
    fontFamily: 'Inter_24pt-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },

  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: hp(3),
  },

  loginPrompt: {
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 13,
    color: '#7186A8',
  },

  loginLink: {
    fontFamily: 'Inter_24pt-Bold',
    fontSize: 13,
    color: '#0867E8',
    marginLeft: 5,
  },
});

export default styles;
