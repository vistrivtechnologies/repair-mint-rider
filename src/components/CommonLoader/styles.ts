import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    margin: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  loaderView:{
    width:wp(15),
    height:hp(8),
    backgroundColor:'white',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width: wp(10), 
    height: hp(5), 
    alignSelf:'center' 
  },
});

export default styles;
