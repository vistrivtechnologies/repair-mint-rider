import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useContext, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { OtpInput } from '../../../components';
import Video from 'react-native-video';
import styles from './OTPVerification.styles';

export default function OTPVerification( { navigation } ) {


  const [ getOTP, setGetOTP ] = useState( '' );

  const handleOTPSubmit = otp => {
    console.log( 'Entered OTP:', otp );
    setGetOTP( otp );
  };

  return (
    <View
      style={ styles.container }>
      <View
        style={ styles.bottomSection }>
        <View
          style={ styles.header }>
          <View
            style={ styles.backButton }>
            <Feather
              name="arrow-left"
              size={ 25 }
              color="#000"
              onPress={ () => {
                navigation.goBack(), setIsSendOTP( false );
              } }
            />
          </View>
          <Text style={ styles.headerTitle }>Verification</Text>
          <View style={ styles.divider } />
        </View>
        <View style={ styles.messageContainer }>
          <Text
            style={ styles.messageText }>
            We`ve Send You The Verification
          </Text>
          {/* <Text
           style={ styles.messageText }>
            Code On { countryCode } { number }
          </Text> */}

          <View style={ styles.otpInputContainer }>
            <OtpInput numberOfInputs={ 6 } onOTPComplete={ handleOTPSubmit } />
          </View>
          { getOTP === '' ? (
            <></>
          ) : (
            <>
              { verifiLoading ? (
                <TouchableOpacity
                  style={ styles.loadingButton }>
                  <ActivityIndicator size={ 'small' } color={ '#fff' } />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={ () => loginVerification( getOTP ) }
                  style={ styles.verifyButton }>
                  <Text
                    style={ styles.verifyButtonText }>
                    Verify
                  </Text>
                </TouchableOpacity>
              ) }
            </>
          ) }
          { loginError ? (
            <Text
              style={ styles.errorText }>
              Not verify user !!
            </Text>
          ) : (
            <></>
          ) }
        </View>
      </View>

      <Video
        source={ {
          uri: 'https://media.istockphoto.com/id/1165772544/video/professional-repairman-repairs-smartphone-removes-details-in-workshop.mp4?s=mp4-640x640-is&k=20&c=90nuVrjcMmpsLMb7Z4Xf9jyDpKpPkwAg_uOnriQmR0k=',
        } } // Replace with your video URL
        style={ styles.video }
        resizeMode="cover"
        repeat={ true }></Video>
      {/* <View
        style={{width: '90%', height: 40, marginTop: 20, flexDirection: 'row'}}>
        <View
          style={{
            width: '20%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Feather name="arrow-left" size={25} color="#000"  onPress={()=>{navigation.geBack(),setIsSendOTP(false)}}/>
        </View>
        <View
          style={{
            width: '60%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Inter_24pt-SemiBold',
              color: '#000',
              fontSize: 18,
            }}>
            Verification
          </Text>
        </View>
        <View style={{width: '20%', height: '100%'}}></View>
      </View>

      <View style={{width: '90%', marginTop: 15}}>
        <Text
          style={{
            fontFamily: 'Inter_24pt-SemiBold',
            fontSize: 14,
            color: '#000',
          }}>
          We`ve Send You The Verification
        </Text>
        <Text
          style={{
            fontFamily: 'Inter_24pt-SemiBold',
            fontSize: 14,
            color: '#000',
          }}>
          Code On {countryCode} {number}
        </Text>

        <View style={{marginTop: 60}}>
          <OTPInput pinCount={6} onSubmit={handleOTPSubmit} />
        </View>
       {
             getOTP === ''?
             <></>

             :
             <>
              {
          verifiLoading ?
          <TouchableOpacity
         
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'rgb(245,141,58)',
            borderRadius: 10,
            marginTop: 70,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
         <ActivityIndicator  size={"small"} color={"#fff"} />
        </TouchableOpacity>
          :
          <TouchableOpacity
          onPress={() => loginVerification(getOTP)}
          style={{
            width: '100%',
            height: 50,
            backgroundColor: 'rgb(245,141,58)',
            borderRadius: 10,
            marginTop: 70,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Inter_24pt-Bold',
              fontSize: 18,
              color: '#fff',
            }}>
            Verify
          </Text>
        </TouchableOpacity>
        }
             </>

       }
       {
         loginError?
        <Text style={{marginTop:10,fontFamily:"Inter_24pt-Medium",color:"red"}}>Not verify user !!</Text>
          :
        <></>
       }

     
      </View> */}
    </View>
  );
}
