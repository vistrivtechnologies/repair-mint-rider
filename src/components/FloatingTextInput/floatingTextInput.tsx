import React, {FC, useRef} from 'react';
import {
  Text,
  TextInput,
  View,
  Animated,
  ViewStyle,
  Easing,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ReturnKeyTypeOptions,
  Image,
  KeyboardTypeOptions,
} from 'react-native';
import TextView from '../TextView/textView';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, ImagesPath} from '../../constant';
import {FormikErrors, FormikTouched} from 'formik';

interface TextInputProps {
  value?: string;
  onChangeText: (text: string) => void;
  label?: String | null;
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
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto' | undefined;
  isMultiline?: boolean;
  oPressIn?: () => void;
}

const FloatingTextInput: FC<TextInputProps> = ({
  label,
  value,
  style,
  onChangeText,
  editable,
  returnKeyType,
  isSecure,
  isRequired,
  onSecureTextPress,
  error,
  touched,
  keyboardType,
  maxLength,
  pointerEvents,
  isMultiline,
  oPressIn,
}) => {
  const inputRef = useRef<TextInput>(null);
  const animatedValue = useRef(new Animated.Value(0));
  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [value ? 3 : 22, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!value) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 150,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={style}>
      <View
        style={[
          styles.container,
          style,
          {
            borderColor:
              error && touched ? Colors.ERROR[100] : Colors.SECONDARY[500],
            height: isMultiline ? hp(20) : hp(7),
          },
        ]}>
        <TouchableWithoutFeedback onPress={() => inputRef?.current?.focus()}>
          <Animated.View
            style={[styles.labelContainer, returnAnimatedTitleStyles]}>
            <Text
              style={[
                styles.label,
                {
                  color:
                    error && touched ? Colors.ERROR[100] : Colors.PRIMARY[400],
                },
              ]}>
              {label}
              <Text style={{color: 'red'}}>{isRequired && '*'}</Text>
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TextInput
          style={[
            styles.input,
            onSecureTextPress && {
              width: wp(80),
              height: isMultiline ? hp(20) : hp(7),
            },
          ]}
          ref={inputRef}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          multiline={isMultiline}
          autoCapitalize="none"
          autoCorrect={false}
          pointerEvents={pointerEvents}
          keyboardType={keyboardType}
          onChangeText={(text: string) => onChangeText(text)}
          secureTextEntry={isSecure}
          returnKeyType={returnKeyType}
          editable={editable}
          maxLength={maxLength}
          onPressIn={oPressIn}
        />

        {onSecureTextPress && (
          <TouchableOpacity
            style={styles.secureBtn}
            onPress={() => onSecureTextPress()}>
            <Image
              source={isSecure ? ImagesPath.eye_open : ImagesPath.eye_close}
              style={styles.eyeStyle}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && touched && <TextView style={styles.error}>{error}</TextView>}
    </View>
  );
};

export default FloatingTextInput;
