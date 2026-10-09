import React, { useState, useEffect } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { Button, CommonAlertModal, CommonLoader, OtpInput, TextView } from '../index';
import Toast from 'react-native-toast-message';
import { useFormik } from 'formik';
import { otpValidationSchema } from '../../helpers/validations';
import { Colors, Icon } from '../../constant';
import styles from './VerifyOtpModal.styles';
import { UserService } from '../../service';
import { HttpStatusCode } from 'axios';
import { decryptData } from '../../constant/decryptData';
import { values } from 'lodash';

interface VerifyOTPModalProps {
    visible: boolean;
    onClose: () => void;
    contactInfo?: {
        type: 'phone' | 'email';
        value: string;
        countryCode?: string;
        deviceId: any;
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

 const { values, errors, touched, handleSubmit, handleChange, setFieldValue } = useFormik({
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

                if (data.mobileNumber && data.countryCode) {
                    const payload = {
                        phoneNumber: data.mobileNumber,
                        countryCode: data.countryCode,
                        deviceId: contactInfo?.deviceId,
                        secretCodeClient:data.otp,
                        verificationMethod: data.verificationMethod
                    };
                    const res = await UserService.login(payload);
                    if (res && res.status === HttpStatusCode.Ok) {
                        const responseData = decryptData(res?.data?.encryptedData);
                        console.log("This is response",responseData)
                        Toast.show({
                            type: 'success',
                            text1: "OTP sent successfully on your mobile number",
                        });
                    } else {
                        Toast.show({
                            type: 'error',
                            text1: 'Something went wrong!',
                        });
                    }
                    return;
                } if (data.email) {
                    const payload = {
                        email:data.email,
                        deviceId: contactInfo?.deviceId,
                        secretCodeClient:data.otp,
                        verificationMethod: data.verificationMethod
                    };
                    const res = await UserService.login(payload);
                    if (res && res.status === HttpStatusCode.Ok) {
                        const responseData = decryptData(res?.data?.encryptedData);
                        console.log("This is response",responseData)
                        Toast.show({
                            type: 'success',
                            text1: "OTP sent successfully on your email",
                        });
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
            } catch (error) {
                console.error('Login Error:', error);
                showAlert(
                    'Login Failed',
                    'Something went wrong. Please try again later.',
                    'Continue',
                    () => hideAlert()
                );
            } finally {
                hideLoader();
            }
        },
    });


    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (visible && globalTimer > 0) {
            timer = setTimeout(() => {
                setGlobalTimer((prev) => prev - 1);
            }, 1000);
        } else if (globalTimer === 0) {
            setCanResend(true);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [visible, globalTimer]);

    const handleResend = () => {
        setGlobalTimer(30);
        setCanResend(false);
        onResendOTP?.();
    };

    const handleOTPComplete = (otp: string) => {
        setFieldValue('otp', otp);
        
        
        if (contactInfo?.type === 'phone') {
            setFieldValue('mobileNumber', contactInfo.value);
            setFieldValue('countryCode', contactInfo.countryCode);
            setFieldValue('deviceId',contactInfo.deviceId)
            setFieldValue('email', '');
        } else if (contactInfo?.type === 'email') {
            setFieldValue('email', contactInfo.value);
            setFieldValue('deviceId',contactInfo.deviceId)
            setFieldValue('mobileNumber', '');
            setFieldValue('countryCode', '');
        }
    };

    const renderContactInfo = () => {
        if (contactInfo?.type === 'phone') {
            return `Phone : ${contactInfo.countryCode || ''} ${contactInfo.value}`;
        } else if (contactInfo?.type === 'email') {
            return `Email : ${contactInfo.value}`;
        }
        return '';
    };
 console.log("this is valuse",values)
    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={onClose} style={styles.crossBtn}>
                        <Icon
                            family='Entypo'
                            name='cross'
                            size={24}
                            color={Colors.black}
                        />
                    </TouchableOpacity>

                    <TextView style={styles.title}>Verify OTP</TextView>
                    <TextView style={styles.infoText}>
                        Enter the OTP sent to <Text style={styles.contactText}>{renderContactInfo()}</Text>
                    </TextView>
                    <View>
                        <OtpInput numberOfInputs={6} onOTPComplete={handleOTPComplete}/>
                    </View>

                    {canResend ? (
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={styles.resendText}>Resend OTP</Text>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.timerText}>
                            Resend OTP in {globalTimer}s
                        </Text>
                    )}
                    <Button
                        title="Verify"
                        onPress={handleSubmit}
                        style={styles.verifyButton}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default VerifyOTPModal;