import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  Modal,
  TextInput,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { UserDataContext } from '../../../context/userDataContext';
import { LocalStorage } from '../../../helpers/localstorage';
import { UserService } from '../../../service';
import { handleSignout } from '../../../helpers/helpers';

export default function Profile() {
  const { userData, setUserData, setIsLoggedIn } =
    useContext(UserDataContext);

  const riderName =
    userData?.userName ||
    userData?.name ||
    userData?.fullName ||
    'Rider';

  const phoneNumber =
    userData?.phoneNumber ||
    userData?.mobileNumber ||
    'Not provided';

  const accountRole =
    userData?.role ||
    userData?.userType ||
    'Delivery Rider';

  const [userLoading, setUserLoading] = useState(true);
  const [editVisible, setEditVisible] = useState(false);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneModalVisible, setPhoneModalVisible] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newCountryCode, setNewCountryCode] = useState('+91');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [phoneOtpSent, setPhoneOtpSent] = useState(false);
  const [phoneSaving, setPhoneSaving] = useState(false);

  useEffect(() => {
    setUserLoading(false);
  }, []);

  useEffect(() => {
    setName(userData?.userName || userData?.name || userData?.fullName || '');
    setEmail(userData?.email || '');
  }, [userData]);

  if (userLoading) {
    return (
      <View style={styles.loader}>
        <Text style={styles.mutedText}>Loading profile...</Text>
      </View>
    );
  }

  const showComingSoon = (feature: string) => {
    Alert.alert(feature, 'This feature will be available soon.');
  };

  const openEditProfile = () => {
      console.log('EDIT PROFILE CLICKED');
    setName(userData?.userName || userData?.name || userData?.fullName || '');
    setEmail(userData?.email || '');
    console.log('OPENING EDIT PROFILE MODAL');
    setEditVisible(true);
  };

  const saveProfile = async () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      Alert.alert('Required', 'Please enter your name.');
      return;
    }

    if (
      trimmedEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
    ) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    try {
      setSaving(true);

      const token = await LocalStorage.read('@token');

      if (!token || typeof token !== 'string') {
        Alert.alert(
          'Session Expired',
          'Please log in again before updating your profile.',
        );
        return;
      }

      const payload: { userName: string; email?: string } = {
        userName: trimmedName,
      };

      if (trimmedEmail) {
        payload.email = trimmedEmail;
      }

      const response = await UserService.updateUser(payload, token);

      const responseBody = response?.data;
      const responseData =
        responseBody?.data?.user ||
        responseBody?.data?.updatedUser ||
        responseBody?.data ||
        responseBody?.user ||
        {};

      const updatedUser = {
        ...(userData || {}),
        ...(responseData && typeof responseData === 'object'
          ? responseData
          : {}),
        userName: trimmedName,
        email: trimmedEmail,
      };

      const saved = await LocalStorage.save('@user', updatedUser);

      if (!saved) {
        Alert.alert(
          'Update Successful',
          'Your profile was updated on the server, but local data could not be saved.',
        );
      }

      setUserData(updatedUser);
      setEditVisible(false);

      Alert.alert('Success', 'Your profile has been updated.');
    } catch (error: any) {
      console.log(
        'PROFILE SAVE ERROR:',
        error?.response?.data || error?.message,
      );

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        'Could not update your profile. Please try again.';

      Alert.alert('Update Failed', message);
    } finally {
      setSaving(false);
    }
  };

  const sendPhoneOtp = async () => {
    const trimmedPhone = newPhoneNumber.trim();

    if (!/^[1-9]\d{6,14}$/.test(trimmedPhone)) {
      Alert.alert('Invalid Phone', 'Please enter a valid phone number.');
      return;
    }

    if (!newCountryCode.trim()) {
      Alert.alert('Required', 'Please enter the country code.');
      return;
    }

    try {
      setPhoneSaving(true);

      const token = await LocalStorage.read('@token');

      if (!token || typeof token !== 'string') {
        Alert.alert('Session Expired', 'Please log in again.');
        return;
      }

      await UserService.sendPhoneUpdateOtp(
        {
          phoneNumber: trimmedPhone,
          countryCode: newCountryCode.trim().startsWith('+')
            ? newCountryCode.trim()
            : `+${newCountryCode.trim()}`,
        },
        token,
      );

      setNewPhoneNumber(trimmedPhone);
      setPhoneOtpSent(true);
      Alert.alert(
        'OTP Sent',
        'OTP has been sent to your new phone number.',
      );
    } catch (error: any) {
      console.log(
        'PHONE OTP SEND ERROR:',
        error?.response?.data || error?.message,
      );

      Alert.alert(
        'OTP Failed',
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          'Could not send OTP. Please try again.',
      );
    } finally {
      setPhoneSaving(false);
    }
  };

  const verifyPhoneOtp = async () => {
    const trimmedPhone = newPhoneNumber.trim();
    const trimmedOtp = phoneOtp.trim();

    if (!/^\d{6}$/.test(trimmedOtp)) {
      Alert.alert('Invalid OTP', 'Please enter the 6-digit OTP.');
      return;
    }

    try {
      setPhoneSaving(true);

      const token = await LocalStorage.read('@token');

      if (!token || typeof token !== 'string') {
        Alert.alert('Session Expired', 'Please log in again.');
        return;
      }

      const normalizedCountryCode = newCountryCode.trim().startsWith('+')
        ? newCountryCode.trim()
        : `+${newCountryCode.trim()}`;

      const response = await UserService.verifyAndUpdatePhone(
        {
          phoneNumber: trimmedPhone,
          countryCode: normalizedCountryCode,
          secretCodeClient: trimmedOtp,
        },
        token,
      );

      const responseBody = response?.data;
      const responseData =
        responseBody?.data?.user ||
        responseBody?.data?.updatedUser ||
        responseBody?.data ||
        responseBody?.user ||
        {};

      const updatedUser = {
        ...(userData || {}),
        ...(responseData && typeof responseData === 'object'
          ? responseData
          : {}),
        phoneNumber: trimmedPhone,
        countryCode: normalizedCountryCode,
      };

      await LocalStorage.save('@user', updatedUser);
      setUserData(updatedUser);
      setPhoneModalVisible(false);
      setPhoneOtp('');
      setPhoneOtpSent(false);

      Alert.alert('Success', 'Your phone number has been updated.');
    } catch (error: any) {
      console.log(
        'PHONE OTP VERIFY ERROR:',
        error?.response?.data || error?.message,
      );

      Alert.alert(
        'Verification Failed',
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          'OTP verification failed. Please try again.',
      );
    } finally {
      setPhoneSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F7F8FC" barStyle="dark-content" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <View style={styles.headingRow}>
          <View>
            <Text style={styles.eyebrow}>YOUR ACCOUNT</Text>
            <Text style={styles.heading}>My Profile</Text>
            <Text style={styles.subtitle}>
              Manage your rider account
            </Text>
          </View>

          <View style={styles.headingIcon}>
            <Feather name="user" size={23} color="#F58D3A" />
          </View>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.profileTop}>
            <View style={styles.avatar}>
              <Feather name="user" size={36} color="#F58D3A" />
            </View>

            <View style={styles.profileIdentity}>
              <Text style={styles.name}>{riderName}</Text>
              <Text style={styles.role}>{accountRole}</Text>

              <View style={styles.statusBadge}>
                <View style={styles.statusDot} />
                <Text style={styles.statusText}>Available</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.editButton}
              onPress={openEditProfile}
              activeOpacity={0.7}
            >
              <Feather name="edit-2" size={17} color="#F58D3A" />
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.accountSummary}>
            <View style={styles.summaryItem}>
              <Feather name="shield" size={18} color="#F58D3A" />
              <View style={styles.summaryText}>
                <Text style={styles.summaryLabel}>Account</Text>
                <Text style={styles.summaryValue}>Active</Text>
              </View>
            </View>

            <View style={styles.summarySeparator} />

            <View style={styles.summaryItem}>
              <Feather name="truck" size={18} color="#F58D3A" />
              <View style={styles.summaryText}>
                <Text style={styles.summaryLabel}>Role</Text>
                <Text style={styles.summaryValue}>Rider</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.sectionCaption}>Your contact details</Text>
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Feather name="phone" size={19} color="#F58D3A" />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Phone Number</Text>
              <Text style={styles.detailValue}>{phoneNumber}</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setNewPhoneNumber('');
                setNewCountryCode('+91');
                setPhoneOtp('');
                setPhoneOtpSent(false);
                setPhoneModalVisible(true);
              }}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Feather name="edit-2" size={17} color="#8993A4" />
            </TouchableOpacity>
          </View>

          <View style={styles.rowDivider} />

          <View style={styles.detailRow}>
            <View style={styles.detailIcon}>
              <Feather name="briefcase" size={19} color="#F58D3A" />
            </View>

            <View style={styles.detailContent}>
              <Text style={styles.detailLabel}>Account Type</Text>
              <Text style={styles.detailValue}>{accountRole}</Text>
            </View>

            <Feather name="chevron-right" size={20} color="#B0B7C3" />
          </View>
        </View>

        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>More Options</Text>
        </View>

        <View style={styles.detailsCard}>
          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => showComingSoon('Help & Support')}
            activeOpacity={0.7}
          >
            <View style={styles.optionIcon}>
              <Feather name="help-circle" size={20} color="#64748B" />
            </View>
            <Text style={styles.optionLabel}>Help & Support</Text>
            <Feather name="chevron-right" size={20} color="#B0B7C3" />
          </TouchableOpacity>

          <View style={styles.rowDivider} />

          <TouchableOpacity
            style={styles.optionRow}
            onPress={() => showComingSoon('Settings')}
            activeOpacity={0.7}
          >
            <View style={styles.optionIcon}>
              <Feather name="settings" size={20} color="#64748B" />
            </View>
            <Text style={styles.optionLabel}>Settings</Text>
            <Feather name="chevron-right" size={20} color="#B0B7C3" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={() => {
            Alert.alert(
              'Log Out',
              'Are you sure you want to log out?',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Log Out',
                  style: 'destructive',
                  onPress: async () => {
                    try {
                      await handleSignout(setIsLoggedIn);
                      setUserData(null);
                    } catch (error) {
                      console.error('Logout error:', error);
                      Alert.alert('Error', 'Unable to log out. Please try again.');
                    }
                  },
                },
              ],
            );
          }}
        >
          <Feather name="log-out" size={19} color="#D94F4F" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>Rider App  ·  My Account</Text>
      </ScrollView>

      <Modal
        visible={editVisible}
        transparent
        animationType="fade"
        onRequestClose={() => {
          if (!saving) setEditVisible(false);
        }}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Edit Profile</Text>
                <Text style={styles.modalSubtitle}>
                  Update your personal details
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setEditVisible(false)}
                disabled={saving}
                style={styles.closeButton}
              >
                <Feather name="x" size={22} color="#64748B" />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Full Name *</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your full name"
              placeholderTextColor="#A0A8B5"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              maxLength={100}
              editable={!saving}
            />

            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              placeholderTextColor="#A0A8B5"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={254}
              editable={!saving}
            />

            <TouchableOpacity
              style={[
                styles.saveButton,
                saving && styles.saveButtonDisabled,
              ]}
              onPress={saveProfile}
              disabled={saving}
              activeOpacity={0.8}
            >
              {saving ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Feather name="check" size={18} color="#FFFFFF" />
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </>
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setEditVisible(false)}
              disabled={saving}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
            </Modal>

            {/* Phone Number Update Modal */}
            <Modal
              visible={phoneModalVisible}
              transparent
              animationType="fade"
              onRequestClose={() => {
                if (!phoneSaving) setPhoneModalVisible(false);
              }}
            >
              <KeyboardAvoidingView
                style={styles.modalOverlay}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              >
                <View style={styles.modalCard}>
                  <View style={styles.modalHeader}>
                    <View>
                      <Text style={styles.modalTitle}>Update Phone Number</Text>
                      <Text style={styles.modalSubtitle}>
                        Verify your new number with OTP
                      </Text>
                    </View>

                    <TouchableOpacity
                      onPress={() => setPhoneModalVisible(false)}
                      disabled={phoneSaving}
                      style={styles.closeButton}
                    >
                      <Feather name="x" size={22} color="#64748B" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.inputLabel}>Country Code</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="+91"
                    placeholderTextColor="#A0A8B5"
                    value={newCountryCode}
                    onChangeText={setNewCountryCode}
                    keyboardType="phone-pad"
                    maxLength={5}
                    editable={!phoneSaving && !phoneOtpSent}
                  />

                  <Text style={styles.inputLabel}>New Phone Number</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Enter new phone number"
                    placeholderTextColor="#A0A8B5"
                    value={newPhoneNumber}
                    onChangeText={setNewPhoneNumber}
                    keyboardType="phone-pad"
                    maxLength={15}
                    editable={!phoneSaving && !phoneOtpSent}
                  />

                  {!phoneOtpSent ? (
                    <TouchableOpacity
                      style={[
                        styles.saveButton,
                        phoneSaving && styles.saveButtonDisabled,
                      ]}
                      onPress={sendPhoneOtp}
                      disabled={phoneSaving}
                      activeOpacity={0.8}
                    >
                      {phoneSaving ? (
                        <ActivityIndicator color="#FFFFFF" />
                      ) : (
                        <>
                          <Feather name="message-circle" size={18} color="#FFFFFF" />
                          <Text style={styles.saveButtonText}>Send OTP</Text>
                        </>
                      )}
                    </TouchableOpacity>
                  ) : (
                    <>
                      <Text style={styles.inputLabel}>Enter 6-digit OTP</Text>
                      <TextInput
                        style={styles.textInput}
                        placeholder="Enter OTP"
                        placeholderTextColor="#A0A8B5"
                        value={phoneOtp}
                        onChangeText={setPhoneOtp}
                        keyboardType="number-pad"
                        maxLength={6}
                        editable={!phoneSaving}
                      />

                      <TouchableOpacity
                        style={[
                          styles.saveButton,
                          phoneSaving && styles.saveButtonDisabled,
                        ]}
                        onPress={verifyPhoneOtp}
                        disabled={phoneSaving}
                        activeOpacity={0.8}
                      >
                        {phoneSaving ? (
                          <ActivityIndicator color="#FFFFFF" />
                        ) : (
                          <>
                            <Feather name="check-circle" size={18} color="#FFFFFF" />
                            <Text style={styles.saveButtonText}>
                              Verify & Update
                            </Text>
                          </>
                        )}
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => {
                          setPhoneOtp('');
                          setPhoneOtpSent(false);
                        }}
                        disabled={phoneSaving}
                      >
                        <Text style={styles.cancelButtonText}>
                          Change Phone Number
                        </Text>
                      </TouchableOpacity>
                    </>
                  )}

                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setPhoneModalVisible(false)}
                    disabled={phoneSaving}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </Modal>
          </View>
        );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 45,
    flexGrow: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8FC',
  },
  mutedText: {
    color: '#8993A4',
    fontSize: 14,
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  eyebrow: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.7,
    color: '#8993A4',
  },
  heading: {
    color: '#172033',
    fontSize: 27,
    fontWeight: '800',
    marginTop: 5,
  },
  subtitle: {
    color: '#8993A4',
    fontSize: 12,
    marginTop: 4,
  },
  headingIcon: {
    height: 46,
    width: 46,
    borderRadius: 15,
    backgroundColor: '#FFF0E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#EDF0F5',
    elevation: 2,
    shadowColor: '#172033',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 68,
    width: 68,
    borderRadius: 22,
    backgroundColor: '#FFF0E4',
    borderWidth: 2,
    borderColor: '#FFE0C6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIdentity: {
    flex: 1,
    marginLeft: 13,
  },
  name: {
    color: '#172033',
    fontSize: 17,
    fontWeight: '800',
  },
  role: {
    color: '#8993A4',
    fontSize: 12,
    marginTop: 4,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#EAF8EF',
    borderRadius: 20,
    paddingHorizontal: 9,
    paddingVertical: 5,
    marginTop: 9,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#239B56',
    marginRight: 6,
  },
  statusText: {
    color: '#21834C',
    fontSize: 11,
    fontWeight: '700',
  },
  editButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#FFF4EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF0F4',
    marginTop: 20,
    marginBottom: 16,
  },
  accountSummary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryText: {
    marginLeft: 9,
  },
  summaryLabel: {
    color: '#8993A4',
    fontSize: 11,
  },
  summaryValue: {
    color: '#172033',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 3,
  },
  summarySeparator: {
    width: 1,
    height: 30,
    backgroundColor: '#EEF0F4',
  },
  sectionHeading: {
    marginTop: 25,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#172033',
    fontSize: 16,
    fontWeight: '800',
  },
  sectionCaption: {
    color: '#8993A4',
    fontSize: 12,
    marginTop: 4,
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#EDF0F5',
  },
  detailRow: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    height: 42,
    width: 42,
    borderRadius: 13,
    backgroundColor: '#FFF3E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    color: '#8993A4',
    fontSize: 12,
    marginBottom: 5,
  },
  detailValue: {
    color: '#172033',
    fontSize: 14,
    fontWeight: '700',
  },
  rowDivider: {
    height: 1,
    backgroundColor: '#F0F2F6',
  },
  optionRow: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: 42,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  optionLabel: {
    flex: 1,
    color: '#344054',
    fontSize: 14,
    fontWeight: '600',
  },
  logoutButton: {
    height: 53,
    borderRadius: 15,
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: '#F7DEDE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    gap: 10,
  },
  logoutText: {
    color: '#D94F4F',
    fontSize: 14,
    fontWeight: '800',
  },
  footer: {
    textAlign: 'center',
    color: '#A0A8B5',
    fontSize: 11,
    marginTop: 19,
  },

  // Edit Profile Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(23, 32, 51, 0.48)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#172033',
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#8993A4',
    marginTop: 5,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#F7F8FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#344054',
    marginBottom: 8,
  },
  textInput: {
    height: 49,
    borderWidth: 1,
    borderColor: '#E3E7EF',
    borderRadius: 12,
    paddingHorizontal: 14,
    color: '#172033',
    fontSize: 14,
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
  },
  saveButton: {
    height: 50,
    backgroundColor: '#F58D3A',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    marginTop: 5,
  },
  saveButtonDisabled: {
    opacity: 0.7,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  cancelButton: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  cancelButtonText: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '700',
  },
});
