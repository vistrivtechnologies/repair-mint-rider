import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors, Fonts, Typography} from '../../constant';
import { scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: hp(7), 
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconStyle: {
    marginRight: 10, 
  },
  headerTitleStyle: {
    fontSize: 18,
    flex: 1, 
    textAlign: 'center',
    color:Colors.PRIMARY[100],
    fontFamily:Fonts.semi_Bold
  },
});

export default styles;
