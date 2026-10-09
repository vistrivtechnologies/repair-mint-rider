import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Fonts } from "../../constant";
import { scale } from "react-native-size-matters";



const styles = StyleSheet.create( {
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: wp( 90 ),
        padding: hp(2.5),
        backgroundColor: Colors.white,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: scale(16),
        fontFamily:Fonts.semi_Bold,
        marginBottom: hp(2),
        color:Colors.black
    },
    infoText: {
        fontSize: scale(12),
        marginBottom: hp(2),
        fontFamily:Fonts.Medium,
        textAlign: 'center',
        color:Colors.black
    },
    contactText: {
        fontWeight: 'bold',
    },
    resendText: {
        color: 'blue',
        marginTop: hp(2),
        fontFamily:Fonts.Medium,
    },
    timerText: {
        color: Colors.greyColor,
        marginTop: hp(2),
        fontFamily:Fonts.Medium,
    },
    verifyButton: {
        marginTop: hp( 3 ),
    },
    crossBtn: {
        position: 'absolute',
        right: wp( 3 ),
        top: hp( 1 )
    }
} );

export default styles;