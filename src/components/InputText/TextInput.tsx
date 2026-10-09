import React, {FC} from 'react';
import {
  TextInput,
  View,
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
  TextStyle,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import {FormikErrors, FormikTouched} from 'formik';
import TextView from '../TextView/textView';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import imagesPath from '../../constant/imagesPath';
import { Colors } from '../../constant';

interface TextInputProps {
  value?: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  label?: string | null;
  editable?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  isSecure?: boolean;
  style?: ViewStyle;
  isRequired?: boolean;
  onSecureTextPress?: () => void;
  error?: FormikErrors<string> | any;
  touched?: FormikTouched<boolean> | any;
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
  isMultiline?: boolean;
  onPressIn?: () => void;
  confirmPassword?: string;
}

const InputText: FC<TextInputProps> = ({
  label,
  value,
  style,
  placeholder,
  onChangeText,
  editable = true, 
  returnKeyType = 'done', 
  isSecure = false,
  isRequired = false,
  onSecureTextPress,
  error,
  touched,
  keyboardType = 'default', 
  maxLength,
  pointerEvents = 'auto',
  isMultiline = false,
  onPressIn,
  confirmPassword,
}) => {
  // Validate password match if `confirmPassword` is provided
  const validatePasswordMatch = () => {
    if (isSecure && confirmPassword && value !== confirmPassword) {
      return 'Passwords do not match';
    }
    return null;
  };

  const passwordMatchError = validatePasswordMatch();

  return (
    <View>
      {/* Label */}
      {label && <TextView style={styles.labelText}>{label}</TextView>}

      {/* Input Container */}
      <View style={[styles.textBoxContainer, style]}>
        <TextInput
          style={[
            {
              color:Colors.black,
              width: onSecureTextPress
                ? widthPercentageToDP(80)
                : widthPercentageToDP(90),
              height: isMultiline ? hp(20) : hp(7),
            },
          ]}
          value={value}
          multiline={isMultiline}
          autoCapitalize="none"
          autoCorrect={false}
          pointerEvents={pointerEvents}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          returnKeyType={returnKeyType}
          editable={editable}
          maxLength={maxLength}
          onPressIn={onPressIn}
          placeholder={placeholder}
          placeholderTextColor={Colors.greyColor}
        />

        {/* Secure Text Button */}
        {onSecureTextPress && (
          <TouchableOpacity
            style={styles.secureBtn}
            onPress={onSecureTextPress}>
            {/* <Image
              source={isSecure ? imagesPath.eye_open : imagesPath.eye_close}
              style={styles.eyeStyle}
            /> */}
          </TouchableOpacity>
        )}
      </View>

      {/* Validation Errors */}
      {passwordMatchError && touched && (
        <TextView style={styles.error}>{passwordMatchError}</TextView>
      )}
      {error && touched && !passwordMatchError && (
        <TextView style={styles.error}>{error}</TextView>
      )}
    </View>
  );
};

export default InputText;
