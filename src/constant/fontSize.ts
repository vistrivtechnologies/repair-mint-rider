import {StyleSheet} from 'react-native';
import Fonts from './fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Typography = StyleSheet.create({
  pageTitleHeading: {
    fontFamily: Fonts.Medium,
    fontSize: wp(6),
    lineHeight: 30,
  },
  GlobalHeaderLight32: {
    fontFamily: Fonts.Medium,
    fontSize: wp(8),
    lineHeight: 48,
  },
  H1Semibold32: {
    fontFamily: Fonts.semi_Bold,
    fontSize: wp(8),
    lineHeight: 48,
  },
  H2Semibold28: {
    fontFamily: Fonts.semi_Bold,
    fontSize: wp(7),
    lineHeight: 42,
  },
  H3Semibold24: {
    fontFamily: Fonts.semi_Bold,
    fontSize: wp(6),
    lineHeight: 36,
  },
  H4Semibold20: {
    fontFamily: Fonts.semi_Bold,
    fontSize: wp(5),
    lineHeight: 30,
  },
  H5Medium16: {
    fontFamily: Fonts.Medium,
    fontSize: wp(4),
    lineHeight: 24,
  },
  H6Semibold13: {
    fontFamily: Fonts.semi_Bold,
    fontSize: wp(3),
    lineHeight: 20,
  },
  BodyRegular14: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3.3),
    lineHeight: 21,
  },
  BodyMedium14: {
    fontFamily: Fonts.Medium,
    fontSize: wp(3.3),
    lineHeight: 21,
  },
  BodyBold14: {
    fontFamily: Fonts.Bold,
    fontSize: wp(3.3),
    lineHeight: 21,
  },
  BodyBold13: {
    fontFamily: Fonts.Bold,
    fontSize: wp(3),
    lineHeight: 21,
  },
  BodyMedium13: {
    fontFamily: Fonts.Medium,
    fontSize: wp(3),
    lineHeight: 21,
  },
 
  BodyRegular13: {
    fontFamily: Fonts.Regular,
    fontSize: wp(3),
    lineHeight: 21,
  },
  BodyRegular12: {
    fontFamily: Fonts.Regular,
    fontSize: wp(2.8),
    lineHeight: 21,
  },
  BodyMedium12: {
    fontFamily: Fonts.Medium,
    fontSize: wp(2.8),
    lineHeight: 21,
  },
  Footnote10: {
    fontFamily: Fonts.Regular,
    fontSize: wp(2.25),
    lineHeight: 15,
  },
});

export default Typography;
