import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Colors} from '../../../constant';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  
  logo:{
   height:hp(10),
   width:wp(90),
   resizeMode:'contain', 
   marginBottom:hp(5)
  },
  titleText: {
    marginTop: 10,
    fontFamily: 'Inter_24pt-SemiBold',
    fontSize: 18,
    color: 'rgb(245,141,58)',
  },
  inputFieldLabel: {
    fontFamily: 'Inter_24pt-SemiBold',
    color: '#000',
  },
  inputFieldContainer: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneNumberContainer: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countryCodeButton: {
    width: '20%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeText: {
    fontFamily: 'Inter_24pt-SemiBold',
    color: '#000',
  },
  otpContainer: {
    width: '90%',
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '90%',
    height: 50,
    backgroundColor: 'rgb(245,141,58)',
    borderRadius: 10,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_24pt-Bold',
    fontSize: 17,
    color: '#fff',
  },
});

export default styles;