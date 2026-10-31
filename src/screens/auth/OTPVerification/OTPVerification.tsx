import React, { useState } from 'react';
import { View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import { OtpInput } from '../../../components';
import { AuthStackProps } from '../../../@types';
import styles from './OTPVerification.styles';

type Props = NativeStackScreenProps<AuthStackProps, 'OTPVerification'>;

export default function OTPVerification({ navigation }: Props) {
  const [otp, setOtp] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.bottomSection}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <Feather
              name="arrow-left"
              size={25}
              color="#000"
              onPress={() => navigation.goBack()}
            />
          </View>
          <Text style={styles.headerTitle}>Verification</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            Enter the verification code sent to you.
          </Text>

          <View style={styles.otpInputContainer}>
            <OtpInput
              numberOfInputs={6}
              onOTPComplete={(value: string) => setOtp(value)}
            />
          </View>

          {otp.length === 6 && (
            <Text style={styles.messageText}>
              Code entered. Please continue through the login verification flow.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
