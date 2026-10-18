
import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { LocalStorage } from '../../helpers/localstorage';
import { UserDataContext } from '../../context/userDataContext';

import {
  CommonAlertModal,
  CommonLoader,
  OtpInput,
} from '../index';

import Toast from 'react-native-toast-message';
import { useFormik } from 'formik';
import { otpValidationSchema } from '../../helpers/validations';
import { UserService } from '../../service';
import { HttpStatusCode } from 'axios';
import { decryptData } from '../../constant/decryptData';

interface VerifyOTPModalProps {
  visible: boolean;
  onClose: () => void;
  contactInfo?: {
    type: 'phone' | 'email';
    value: string;
    countryCode?: string;
    deviceId?: string;
  };
  onResendOTP?: () => void;
}

interface ISigninParams {
  mobileNumber: string;
  countryCode: string;
  email: string;
  otp: string;
  deviceId: string;
  verificationMethod: string;
}

const VerifyOTPModal: React.FC<VerifyOTPModalProps> = ({
  visible,
  onClose,
  contactInfo,
  onResendOTP,
}) => {
  const [globalTimer, setGlobalTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const { showAlert, hideAlert } = CommonAlertModal();
  const { showLoader, hideLoader } = CommonLoader();

  const { setUserData, setIsLoggedIn } = useContext(UserDataContext);

  const {
    values,
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    validationSchema: otpValidationSchema,
    initialValues: {
      otp: '',
      email: '',
      mobileNumber: '',
      countryCode: '',
      deviceId: '',
      verificationMethod: 'otp',
    },


onSubmit: async (data: ISigninParams) => {
  try {
    showLoader();

    const payload = data.mobileNumber
      ? {
          phoneNumber: data.mobileNumber,
          countryCode: data.countryCode || '+91',
          deviceId: contactInfo?.deviceId || data.deviceId,
          secretCodeClient: data.otp,
          verificationMethod: data.verificationMethod,
          isLoginFor: 'rider-app',
        }
      : {
          email: data.email,
          deviceId: contactInfo?.deviceId || data.deviceId,
          secretCodeClient: data.otp,
          verificationMethod: data.verificationMethod,
          isLoginFor: 'rider-app',
        };

    const res = await UserService.login(payload);

    if (res?.status !== HttpStatusCode.Ok) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: 'Please try again.',
      });
      return;
    }

    const responseData = decryptData(res?.data?.encryptedData);

    if (!responseData?.success || !responseData?.data?.user) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: responseData?.message || 'Invalid login response.',
      });
      return;
    }

    const user = responseData.data.user;
    const token = responseData.data.jwt_token;

    if (!token) {
      Toast.show({
        type: 'error',
        text1: 'Login failed',
        text2: 'Authentication token was not returned.',
      });
      return;
    }

    const loginSaved = await LocalStorage.save('@login', true);
    const userSaved = await LocalStorage.save('@user', user);
    const tokenSaved = await LocalStorage.save('@token', token);

    if (!loginSaved || !userSaved || !tokenSaved) {
      await LocalStorage.removeItem('@login');
      Toast.show({
        type: 'error',
        text1: 'Unable to save login details',
        text2: 'Please try again.',
      });
      return;
    }

    setUserData(user);
    setIsLoggedIn(true);

    Toast.show({
      type: 'success',
      text1: 'Login successful',
    });

    onClose();
  } catch (error) {
    console.error('Login failed. Check the API error without logging tokens.');

    showAlert(
      'Login Failed',
      'Unable to log in. Please check your details and try again.',
      'Continue',
      () => hideAlert(),
    );
  } finally {
    hideLoader();
  }
},
  });

  useEffect(() => {
    if (!visible) {
      return;
    }

    setGlobalTimer(30);
    setCanResend(false);
    setFieldValue('otp', '');
  }, [visible, setFieldValue]);

  useEffect(() => {
    if (!visible || globalTimer <= 0) {
      if (globalTimer <= 0) {
        setCanResend(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setGlobalTimer(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [visible, globalTimer]);

  const handleResend = () => {
    if (!canResend) {
      return;
    }

    setGlobalTimer(30);
    setCanResend(false);
    onResendOTP?.();
  };

  const handleOTPComplete = (otp: string) => {
    setFieldValue('otp', otp);

    if (contactInfo?.type === 'phone') {
      setFieldValue('mobileNumber', contactInfo.value);
      setFieldValue('countryCode', contactInfo.countryCode || '+91');
      setFieldValue('email', '');
    } else if (contactInfo?.type === 'email') {
      setFieldValue('email', contactInfo.value);
      setFieldValue('mobileNumber', '');
      setFieldValue('countryCode', '');
    }
  };

  const renderContactInfo = () => {
    if (contactInfo?.type === 'phone') {
      return `Phone: ${contactInfo.countryCode || '+91'} ${contactInfo.value}`;
    }

    if (contactInfo?.type === 'email') {
      return `Email: ${contactInfo.value}`;
    }

    return '';
  };

  return (
    <View
      pointerEvents={visible ? 'auto' : 'none'}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99999,
        elevation: 99999,
        display: visible ? 'flex' : 'none',
        backgroundColor: 'rgba(0,0,0,0.55)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ width: '100%' }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 24,
              width: '100%',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={onClose}
              style={{ alignSelf: 'flex-end', padding: 8 }}>
              <Text style={{ fontSize: 22, color: '#333333' }}>✕</Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                color: '#222222',
                marginBottom: 12,
              }}>
              Verify OTP
            </Text>

            <Text
              style={{
                fontSize: 14,
                color: '#555555',
                textAlign: 'center',
                marginBottom: 24,
              }}>
              Enter the OTP sent to {renderContactInfo()}
            </Text>

            <OtpInput
              numberOfInputs={6}
              onOTPComplete={handleOTPComplete}
            />

            {typeof errors.otp === 'string' && (
              <Text style={{ color: 'red', marginTop: 8 }}>
                {errors.otp}
              </Text>
            )}

            <TouchableOpacity
              disabled={!canResend}
              onPress={handleResend}
              style={{ marginTop: 20, marginBottom: 24 }}>
              <Text
                style={{
                  color: canResend ? '#59483D' : '#999999',
                  fontSize: 14,
                }}>
                {canResend
                  ? 'Resend OTP'
                  : `Resend OTP in ${globalTimer}s`}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={{
                backgroundColor: '#AD8B73',
                paddingVertical: 14,
                borderRadius: 8,
                width: '100%',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                Verify & Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default VerifyOTPModal;