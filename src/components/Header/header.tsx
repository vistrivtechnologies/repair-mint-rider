import {Image, Pressable, StyleSheet, View} from 'react-native';
import React, {FC, useContext} from 'react';
import Icon from '../../constant/Icon';
import TextView from '../TextView/textView';
import {useNavigation} from '@react-navigation/native';
import {UserData, UserDataContext} from '../../context/userDataContext';
import {Colors, ImagesPath} from '../../constant';
import styles from './styles';

interface HeaderProps {
  headerTitle?: string;
  iconName?: string;
  iconFamily?: string;
  iconSize?: number;
  iconColor?: string;
  headerType?: string;
  onDrawerPress?: () => void;
  onBellPress?: () => void;
}

const Header: FC<HeaderProps> = ({
  headerType,
  headerTitle,
  iconName = 'arrowleft',
  iconFamily = 'AntDesign',
  iconSize = 24,
  iconColor,
  onDrawerPress,
  onBellPress,
}) => {
  const {isDarkMode} = useContext<UserData>(UserDataContext);
  const textColor =
    isDarkMode === 'dark' ? Colors.PRIMARY[300] : Colors.PRIMARY[400];
  const navigate = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerInnerContainer}>
        <Pressable style={styles.iconStyle} onPress={() => navigate.goBack()}>
          <Icon
            name={iconName}
            family={iconFamily}
            size={iconSize}
            color={iconColor || Colors.black}
          />
        </Pressable>

        {headerTitle && (
          <TextView style={[styles.headerTitleStyle]}>
            {headerTitle}
          </TextView>
        )}
      </View>
    </View>
  );
};



export default Header;
