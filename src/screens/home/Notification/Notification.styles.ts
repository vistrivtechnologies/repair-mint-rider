import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollView: {
      alignItems: 'center',
    },
    header: {
      width: '90%',
      marginTop: 12,
    },
    headerText: {
      fontFamily: 'Inter_24pt-SemiBold',
      fontSize: 19,
      color: '#000',
    },
    notificationContainer: {
      width: '90%',
      height: 100,
      marginTop: 10,
      borderColor: '#C9C9C9',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      width: '30%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divider: {
      width: '1%',
      height: '90%',
    },
    notificationDetails: {
      width: '69%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    notificationText: {
      color: '#000',
      fontFamily: 'Inter_24pt-SemiBold',
      fontSize: 14,
    },
    notificationTime: {
      color: 'rgb(245,141,58)',
      fontFamily: 'Inter_24pt-SemiBold',
      fontSize: 14,
    },
    notificationTimeSuccess: {
      color: 'rgb(102,200,106)',
      fontFamily: 'Inter_24pt-SemiBold',
      fontSize: 14,
    },
  });

  export default styles;