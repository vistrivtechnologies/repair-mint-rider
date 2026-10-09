import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors, Typography } from "../../constant";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.ERROR[100],
        backgroundColor: Colors.PRIMARY[700],
        width: wp(90),
    },
    input: {
        padding: hp(2),
        top:hp(.5),
        color:'#000',
        paddingHorizontal: hp(2),
    },
    labelContainer: {
        position: 'absolute',
        paddingHorizontal: hp(1.3),

    },
    label: {
        color: Colors.SECONDARY[400],
        //top:hp(.3),
        ...Typography.BodyMedium13,
        //paddingHorizontal: hp(1),
    },
    error: {
        marginTop: 4,
        marginLeft: 12,
        color: Colors.ERROR[100],
        maxWidth: wp(90),
        ...Typography.BodyRegular12,
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
    }
});

export default styles;
