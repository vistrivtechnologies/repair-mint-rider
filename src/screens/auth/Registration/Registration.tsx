
import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import styles from './Registration.styles';
import { Header } from '../../../components';
import { AuthStackProps } from '../../../@types';
import { ImagesPath } from '../../../constant';
import DeviceInfo from 'react-native-device-info';
import { HttpStatusCode } from 'axios';
import { UserService } from '../../../service';

type RegistrationNavigationProp = NativeStackNavigationProp<
  AuthStackProps,
  'Registration'
>;

const BLUE = '#0867E8';
const CYAN = '#38BDF8';
const TEXT = '#15315D';
const MUTED = '#7186A8';

const Registration = () => {
  const navigation = useNavigation<RegistrationNavigationProp>();

  const [showCountryPicker, setShowCountryPicker] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [inputOTP, setInputOTP] = useState('');
  const [otpLoading, setOtpLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);


const handleSendOtp = async () => {
  if (!fullName.trim()) {
    Alert.alert('Required', 'Please enter your full name.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    Alert.alert('Invalid email', 'Please enter a valid email address.');
    return;
  }

  if (!/^\d{10}$/.test(contact.trim())) {
    Alert.alert('Invalid phone', 'Please enter a 10-digit mobile number.');
    return;
  }

  try {
    setOtpLoading(true);

    const response = await UserService.sentOtp({
      phoneNumber: contact.trim(),
      countryCode,
      isAuthServiceFor: 'register',
    });

    if (
      response.status === HttpStatusCode.Ok ||
      response.status === HttpStatusCode.Created
    ) {
      setOtpSent(true);
      setOtpVisible(true);
      Alert.alert('OTP Sent', 'OTP request successful. Please enter your OTP.');
    } else {
      Alert.alert('OTP Failed', 'Unable to send OTP. Please try again.');
    }
  } catch (error: any) {
    console.log('REGISTRATION OTP ERROR:', error.response?.data || error.message);
    Alert.alert(
      'OTP Failed',
      error.response?.data?.message ||
        error.response?.data?.error ||
        'Unable to send OTP. Check the server and try again.',
    );
  } finally {
    setOtpLoading(false);
  }
};



const handleRegister = async () => {
  if (!fullName.trim() || !email.trim() || !/^\d{10}$/.test(contact.trim())) {
    Alert.alert('Required', 'Please enter your name, valid email and mobile number.');
    return;
  }

  if (!otpSent || !inputOTP.trim()) {
    Alert.alert('OTP required', 'Please request OTP and enter it.');
    return;
  }

  if (!/^\d{6}$/.test(inputOTP.trim())) {
    Alert.alert('Invalid OTP', 'Please enter the 6-digit OTP.');
    return;
  }

  try {
    setRegisterLoading(true);

    const deviceId = await DeviceInfo.getUniqueId();

    const payload = {
      userName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phoneNumber: contact.trim(),
      countryCode,
      secretCodeClient: inputOTP.trim(),
      deviceId,
      role: 'RIDER',
      verificationMethod: 'otp',
      addressInput: 'Patna, Bihar, India',
    };

    const response = await UserService.registerUser(payload);

    if (
      response.status === HttpStatusCode.Ok ||
      response.status === HttpStatusCode.Created
    ) {
      Alert.alert(
        'Registration Successful',
        'Your account has been created. Please log in.',
        [{ text: 'OK', onPress: () => navigation.goBack() }],
      );
    } else {
      Alert.alert('Registration Failed', 'Please try again.');
    }
  } catch (error: any) {
    console.log(
      'REGISTRATION ERROR:',
      error.response?.data || error.message,
    );

    Alert.alert(
      'Registration Failed',
      error.response?.data?.message ||
        error.response?.data?.error ||
        'Unable to register. Please check the server logs.',
    );
  } finally {
    setRegisterLoading(false);
  }
};


  const renderUnderlineField = (
    label: string,
    value: string,
    onChangeText: (text: string) => void,
    placeholder: string,
    options: {
      keyboardType?: 'default' | 'email-address' | 'number-pad';
      autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
      maxLength?: number;
    } = {},
  ) => (
    <View style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#879AB7"
        keyboardType={options.keyboardType ?? 'default'}
        autoCapitalize={options.autoCapitalize ?? 'sentences'}
        autoCorrect={false}
        maxLength={options.maxLength}
        style={styles.fieldInput}
        selectionColor={BLUE}
      />
      <View style={styles.underline} />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={BLUE}
        barStyle="light-content"
      />

      {/* Decorative curved blue header */}
      <View pointerEvents="none" style={styles.waveContainer}>
        <View style={styles.cyanWave} />
        <View style={styles.blueWave} />
      </View>

      <Header />

      <KeyboardAvoidingView
        style={styles.keyboardArea}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.form}>
            <Image
              source={ImagesPath.eServe_Logo_Icon}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
              Enter your details to get started
            </Text>

            {renderUnderlineField(
              'Full Name',
              fullName,
              setFullName,
              'Enter your full name',
            )}

            {renderUnderlineField(
              'Email Address',
              email,
              setEmail,
              'Enter your email',
              {
                keyboardType: 'email-address',
                autoCapitalize: 'none',
              },
            )}

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Phone Number</Text>

              <View style={styles.phoneRow}>
                <TouchableOpacity
                  onPress={() => setShowCountryPicker(true)}
                  activeOpacity={0.7}
                  style={styles.countryButton}
                >
                  <Text style={styles.countryCode}>{countryCode}</Text>
                </TouchableOpacity>

                <TextInput
                  value={contact}
                  onChangeText={setContact}
                  placeholder="Enter mobile number"
                  placeholderTextColor="#879AB7"
                  keyboardType="number-pad"
                  maxLength={10}
                  style={styles.phoneInput}
                  selectionColor={BLUE}
                />
              </View>

              <View style={styles.underline} />
            </View>

            <TouchableOpacity
              style={styles.sendOtpButton}
              onPress={handleSendOtp}
              activeOpacity={0.8}
              disabled={otpLoading}
            >
            <Text style={styles.sendOtpText}>
              {otpLoading ? 'Sending OTP...' : 'Send OTP'}
            </Text>
            </TouchableOpacity>

            {otpVisible && (
              <View style={styles.field}>
                <Text style={styles.fieldLabel}>OTP Verification</Text>
                <TextInput
                  value={inputOTP}
                  onChangeText={setInputOTP}
                  placeholder="Enter OTP"
                  placeholderTextColor="#879AB7"
                  keyboardType="number-pad"
                  maxLength={6}
                  style={styles.fieldInput}
                  selectionColor={BLUE}
                />
                <View style={styles.underline} />
              </View>
            )}

            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
              activeOpacity={0.85}
            >
            <Text style={styles.registerText}>
              {registerLoading ? 'Registering...' : 'Register Now'}
            </Text>
            </TouchableOpacity>

            <View style={styles.loginRow}>
              <Text style={styles.loginPrompt}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
              >
                <Text style={styles.loginLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <CountryPicker
        show={showCountryPicker}
        onBackdropPress={() => setShowCountryPicker(false)}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setShowCountryPicker(false);
        }}
        inputPlaceholder="Search country or code..."
        searchMessage="Type country name or code..."
        style={{
          modal: {
            height: hp(50),
            backgroundColor: '#FFFFFF',
          },
        }}
      />
    </View>
  );
};

export default Registration;
