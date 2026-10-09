import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { CountryPicker } from 'react-native-country-codes-picker';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Registration.styles';
import { Button, Header, InputText } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackProps } from '../../../@types';
import { ImagesPath } from '../../../constant';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


type SplashScreenNavigationType = NativeStackNavigationProp<AuthStackProps, 'Registration'>
const Registration = () => {

  const navigation = useNavigation<SplashScreenNavigationType>();

  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [email, setEmail] = useState('');
  const [inputOTP, setInputOTP] = useState('');
  const [loading, setLoading] = useState('');
  const secretKey = '4Q8P3805IM195';


  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({
    code: 'IN',
    dial_code: '+91',
    name: 'India',
  });




  const handleCountrySelect = (country: { code: string; dial_code: string; name: string }) => {
    setSelectedCountry(country);
  };


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}>

        <View style={{ marginTop: hp(7) }}>
          <Image source={ImagesPath.eServe_Logo_Icon} style={styles.logo} />

          <InputText
            label={'Full Name'}
            value={fullName}
            onChangeText={e => setFullName(e)}
            placeholder={'Enter Full Name'}
          />



          <View style={{ width: '90%', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Inter_24pt-SemiBold', color: '#000' }}>
              Phone Number
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              borderColor: '#000',
              borderWidth: 1,
              height: 50,
              marginTop: 15,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                width: '20%',
                height: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontFamily: 'Inter_24pt-SemiBold', color: '#000' }}>
                {countryCode}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '80%',
              }}>
              <TextInput
                placeholder="Enter Mobile Number"
                keyboardType="numeric"
                value={contact}
                onChangeText={e => setContact(e)}
                style={{ width: '95%', color: '#000' }}
                placeholderTextColor={'#c9c9c9'}
              />

            </View>
          </View>

          <View style={{ marginTop: hp(1), marginBottom: hp(5) }}>
            <InputText
              label={'OTP Verification'}
              placeholder="Enter OTP"
              keyboardType="numeric"
              value={inputOTP}
              onChangeText={e => setInputOTP(e)}
            />
          </View>
          <Button title={"Register Now"} buttonWidth={wp(90)} />
        </View>
      </ScrollView>

      <CountryPicker
        show={show}
        onBackdropPress={() => setVisible(false)}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
        inputPlaceholder="Search Code Here..."
        searchMessage="Type country name or code..."
        style={{
          modal: {
            height: hp(50),
            backgroundColor: '#fff',
          },
        }}
      />
    </View>
  );
}
export default Registration;