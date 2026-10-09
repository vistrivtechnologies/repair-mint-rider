import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
    },
    bottomSection: {
      width: '100%',
      position: 'absolute',
      height: 350,
      bottom: 0,
      backgroundColor: 'white',
      zIndex: 3,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      width: '90%',
      height: 40,
      marginTop: 20,
      flexDirection: 'row',
    },
    backButton: {
      width: '20%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    headerTitle: {
      width: '60%',
      height: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter_24pt-SemiBold',
      color: '#000',
      fontSize: 18,
    },
    divider: {
      width: '20%',
      height: '100%',
    },
    messageContainer: {
      width: '90%',
      marginTop: 15,
    },
    messageText: {
      fontFamily: 'Inter_24pt-SemiBold',
      fontSize: 14,
      color: '#000',
    },
    otpInputContainer: {
      marginTop: 60,
    },
    loadingButton: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgb(245,141,58)',
      borderRadius: 10,
      marginTop: 70,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    verifyButton: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgb(245,141,58)',
      borderRadius: 10,
      marginTop: 70,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    verifyButtonText: {
      fontFamily: 'Inter_24pt-Bold',
      fontSize: 18,
      color: '#fff',
    },
    errorText: {
      marginTop: 10,
      fontFamily: 'Inter_24pt-Medium',
      color: 'red',
    },
    video: {
      width: '100%',
      height: '100%',
      flex: 1,
    },
  });

  export default styles;