import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constant";
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: hp(1),
    paddingVertical: hp(2),
    flexDirection:'row',
    alignSelf: "center",
    backgroundColor: Colors.primaryColor,
  },
  buttonView: {
    alignItems: "center",
    flexDirection: "row",
  },
  disabledButtonContainer: {
    borderRadius: 10,
    paddingVertical: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.SECONDARY[200],
    borderWidth: 1,
    borderColor: Colors.SECONDARY[200],
  },
  buttonText: {
    color: Colors.PRIMARY[300],
    fontSize: wp(4),
    marginLeft:hp(1),
    marginRight:hp(1),
    fontFamily: Fonts.Regular,
    lineHeight: hp(2.4),
    textAlign:'center',
    flex:1
  },

  touchableOpacityStyle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'row',
  },
});

export default styles;
