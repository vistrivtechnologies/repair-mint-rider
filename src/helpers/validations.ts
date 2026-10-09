import * as Yup from 'yup';

const phoneRegExp = /^[0-9]{10}$/;
const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const signInValidationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegExp, 'Email is not valid').nullable(), 
  mobileNumber: Yup.string()
  .matches(phoneRegExp, 'Mobile number is not valid').nullable(), 
  countryCode: Yup.string().nullable(),
}).test(
'email-or-mobile-required',
'Either email or mobile number is required',
function (value) {
  const { email, mobileNumber } = value;
  return !!(email ?? mobileNumber);
}
)

const mobileNumberValidationSchema = Yup.object().shape({
  mobileNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Please enter mobile number'),
});

const otpValidationSchema = Yup.object().shape({
  otp: Yup.string().length(6, 'OTP must be exactly 6 digits').required('OTP is required'),
  email: Yup.string().matches(emailRegExp, 'Email is not valid').nullable(), 
  mobileNumber: Yup.string().nullable(),
  countryCode: Yup.string().nullable(),
  deviceId: Yup.string().nullable(),
 verificationMethod:Yup.string().nullable(),
});

const verifyPasswordSchema = Yup.object().shape({
  password: Yup.string().required('Password is required') .min(8, 'Password must be at least 5 characters'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
});

const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter first name'),
  lastName: Yup.string().required('Please enter last name'),
  mobileNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Please enter mobile number'),
  email: Yup.string().required('Please enter email address'), 
  password: Yup.string().required('Please enter password'),
});

export {
  signInValidationSchema,
  mobileNumberValidationSchema,
  otpValidationSchema,
  verifyPasswordSchema,
  signUpValidationSchema,
};
