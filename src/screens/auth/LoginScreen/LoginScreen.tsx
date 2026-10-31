import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { CountryPicker } from 'react-native-country-codes-picker';
import Video from 'react-native-video';
import styles from './LoginScreeen.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackProps } from '../../../@types';
import { Button, VideoWrapper, VerifyOTPModal, CommonAlertModal, CommonLoader, CustomPhoneNumberInput, TextView, InputText } from '../../../components';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ImagesPath } from '../../../constant';
import { useFormik } from 'formik';
import { signInValidationSchema } from '../../../helpers/validations';
import Toast from 'react-native-toast-message';
import { UserService } from '../../../service';
import { decryptData } from '../../../constant/decryptData';
import { HttpStatusCode } from 'axios';
import { UserData, UserDataContext } from '../../../context/userDataContext';
import { Country } from 'react-native-country-picker-modal';
import DeviceInfo from 'react-native-device-info';


type LoginScreenNavigationType = NativeStackNavigationProp<AuthStackProps, 'LoginScreen'>

interface ISigninParams {
  mobileNumber: string;
  countryCode: string;
  email: string;
}

interface ContactInfo {
  type: 'email' | 'phone';
  value: string;
  countryCode?: string;
  deviceId?: any;
}
const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationType>();

  const { isDarkMode, setIsLoggedIn, setUserData } = useContext<UserData>(UserDataContext);
  const { showAlert, hideAlert } = CommonAlertModal();
  const { showLoader, hideLoader } = CommonLoader();
  const [showOTPModal, setShowOTPModal] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [contact, setContact] = useState('');
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    type: 'phone',
    value: '',
    countryCode: '+91'
  });


  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } = useFormik({
    validationSchema: signInValidationSchema,
    initialValues: {
      mobileNumber: '',
      countryCode: '+91',
      email: '',
    },
    onSubmit: async (data: ISigninParams) => {
      console.log('Login Data:', data);
      try {
        if (!data.mobileNumber && !data.email) {
          showAlert(
            'Login Issue.',
            'Please enter either Mobile Number or Email.',
            'Continue',
            () => hideAlert()
          );
          return;
        }

        showLoader();

        if (data.mobileNumber && data.countryCode) {
            console.log("PHONE OTP BRANCH ENTERED");

const payload = {
  phoneNumber: data.mobileNumber,
  countryCode: data.countryCode,
  isAuthServiceFor: "login",
};
          console.log("OTP PAYLOAD BEFORE API:", JSON.stringify(payload));
   const res = await UserService.sentOtp(payload);
   console.log("OTP API STATUS:", res.status);

   if (res && res.status === HttpStatusCode.Ok) {
     const responseData = decryptData(res?.data?.encryptedData);
     console.log("OTP API DECRYPTED RESPONSE:", responseData);
     Toast.show({
       type: 'success',
       text1: "OTP sent successfully on your mobile number",
     });

       const deviceId = await DeviceInfo.getUniqueId();

       const newContactInfo = {
         type: 'phone' as const,
         value: data.mobileNumber,
         countryCode: data.countryCode,
         deviceId,
       };

     console.log("CONTACT INFO SETTING:", newContactInfo);
     setContactInfo(newContactInfo);

     setTimeout(() => {
       console.log("OPENING OTP MODAL");
       setShowOTPModal(true);
     }, 500);
   } else {
     Toast.show({
       type: 'error',
       text1: 'Something went wrong!',
     });
   }

   return;
        }

        if (data.email) {
          const payload = {
            email: data.email,
            isAuthServiceFor: "login",
          };
          console.log("OTP PAYLOAD BEFORE API:", JSON.stringify(payload));
          const res = await UserService.sentOtp(payload);
          if (res && res.status === HttpStatusCode.Ok) {
            const responseData = decryptData(res?.data?.encryptedData);


            Toast.show({
              type: 'success',
              text1: "OTP sent to your email address",
            });

            setContactInfo({
              type: 'email',
              value: data.email,
              deviceId: responseData?.data?.secretCode?._id
            });
            setShowOTPModal(true);
          } else {
            Toast.show({
              type: 'error',
              text1: 'Something went wrong!',
            });
          }
          return;
        }
        showAlert(
          'Login Issue.',
          'Please provide valid login details.',
          'Continue',
          () => hideAlert()
        );
      } catch (error: any) {
        console.log("LOGIN ERROR MESSAGE:", error?.message);
        console.log("LOGIN ERROR URL:", error?.config?.url);
        console.log("LOGIN ERROR BASE URL:", error?.config?.baseURL);
        console.log("LOGIN HTTP STATUS:", error?.response?.status);
        console.log(
          "LOGIN ERROR RESPONSE:",
          JSON.stringify(error?.response?.data, null, 2)
        );

        showAlert(
          'Login Failed',
          error?.response?.data?.message ||
            'Something went wrong. Please try again later.',
          'Continue',
          () => hideAlert()
        );
      } finally {
        hideLoader();
      }
    },
  });


  const handleResendOTP = () => {
    handleSubmit();
  };

  console.log("LOGIN SCREEN MODAL STATE:", showOTPModal);
  console.log("LOGIN SCREEN CONTACT INFO:", contactInfo);

  return (
    <View
      style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
  <VideoWrapper
    source={require("../../../assets/video/tech-video.mov")}
  />
      <Image source={ImagesPath.FixMantra_white_Logo_Icon} style={styles.logo} />
      <Image source={ImagesPath.delivery_Icon} style={styles.image} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 10}
        >
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
            bounces={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.infoContainer]}>
              <View style={styles.inputView}>
                <View style={styles.InputMainView}>
                  <CustomPhoneNumberInput
                    label={'Phone Number *'}
                    placeholder={'Mobile'}
                    keyboardType={'phone-pad'}
                    onChangeText={handleChange('mobileNumber')}
                    value={values.mobileNumber}
                    touched={touched.mobileNumber}
                    error={errors.mobileNumber}
                    onSelectCountry={(country: Country) => {
                      setFieldValue('countryCode', '+' + country.callingCode[0]);
                    }}
                  />
                  <TextView style={styles.orText}>OR</TextView>
                  <InputText
                    label={'Email Address*'}
                    placeholder={'Email Address*'}
                    keyboardType={'email-address'}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    touched={touched.email}
                    error={errors.email}
                  />
                </View>
                <View style={styles.actionButton}>
                  <Button
                    title={'Login'}
                    buttonWidth={wp(85)}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <VerifyOTPModal
        visible={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        //@ts-ignore
        contactInfo={contactInfo}
        onResendOTP={handleResendOTP}
      />
    </View>
  );
}

export default LoginScreen