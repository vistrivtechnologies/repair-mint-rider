import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import {Colors, Fonts} from '../../constant';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FormikErrors, FormikTouched} from 'formik';
import CountryPicker, {
  Country,
  CountryCode,
} from 'react-native-country-picker-modal';
import TextView from '../TextView/textView';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface CustomPhoneNumberInputFieldProps {
  label: string;
  value?: string;
  marginTop?: number;
  placeholder?: string;
  password?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  onChangeText: (text: string) => void;
  error?: FormikErrors<string> | any;
  touched?: FormikTouched<boolean> | any;
  onSelectCountry:(countryCode:Country)=>void;
}

const CustomPhoneNumberInput: React.FC<CustomPhoneNumberInputFieldProps> = ({
  label,
  marginTop = 0,
  placeholder = '',
  onChangeText,
  password = false,
  keyboardType = 'default',
  onSelectCountry,
  error,
  touched,
}) => {
  const [showCountry, setShowCountry] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  const [countryCode, setCountryCode] = useState<CountryCode>('IN');
  const [country, setCountry] = useState<Country | null>(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);

  useEffect(() => {
    const defaultCountry: Partial<Country> = {
      cca2: 'IN',
      callingCode: ['91'],
      name: 'India',
    };
    setCountry(defaultCountry as Country);
  }, []);

  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    onSelectCountry(selectedCountry);
    setCountry(selectedCountry);
  };

  return (
    <View style={{marginTop}}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.textBoxContainer}>
        <TouchableOpacity
          onPress={() => setShowCountry(!showCountry)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: moderateScale(4),
          }}>
          <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            }}
            visible={showCountry}
          />
          <Text style={styles.callingCodeText}>
            {country?.callingCode ? `+${country.callingCode[0]}` : ''}
          </Text>
          <MaterialIcons
            style={{marginLeft: moderateScale(2)}}
            name={'keyboard-arrow-down'}
            size={22}
            color={Colors.black}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={placeholder}
          autoCorrect={false}
          style={styles.inputBoxText}
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={10}
          placeholderTextColor={Colors.greyColor}
        />
      </View>
      {error && touched && (
        <TextView style={styles.validationTextStyle}>{error}</TextView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    color: Colors.black,
    fontFamily: Fonts.Regular,
    fontSize: scale(12),
    marginBottom: moderateVerticalScale(7),
    marginLeft: wp(0.5),
    fontWeight:"500"
  },
  textBoxContainer: {
    backgroundColor: Colors.white,
    borderWidth:0.5,
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    padding: moderateScale(3),
  },
  inputBoxText: {
    fontSize: scale(11),
    fontFamily: 'JosefinSans-Regular',
    fontWeight: '500',
    marginLeft: moderateScale(10),
    flex: 1,
    color:Colors.black
  },
  validationTextStyle: {
    fontSize: scale(10),
    fontFamily: 'FuturaMediumBT',
    color: Colors.ERROR[100],
    marginTop: moderateVerticalScale(3),
  },
  callingCodeText: {
    fontSize: scale(11),
    fontFamily: 'JosefinSans-Regular',
    fontWeight: '500',
    marginLeft: moderateScale(4),
    color:Colors.black
  },
});

export default CustomPhoneNumberInput;
