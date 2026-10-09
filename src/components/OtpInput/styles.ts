import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Colors, Typography } from "../../constant";


const styles = StyleSheet.create({
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: wp(80),
      marginVertical: wp(2),
    },
    otpInput: {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#E0E0E0', 
      backgroundColor: '#F5F5F5', 
      width: wp(16), 
      height: hp(8), 
      textAlign: 'center', 
      marginHorizontal: 5, 
      ...Typography.BodyMedium13,
     
    },
    focusedOtpInput: {
      borderColor: Colors.PRIMARY[200], 
      backgroundColor: Colors.PRIMARY[300], 
    },
  });
  
  export default styles;
  