import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { TextView } from '../../components';
import { Colors } from '../../constant';
import { UserData, UserDataContext } from '../../context/userDataContext';


interface Screen {
  name: string;
  component: React.ComponentType<any>;
}

interface TopTabNavigatorProps {
  screens: Screen[];
}

const TopTabNavigator: React.FC<TopTabNavigatorProps> = ({ screens }) => {
    const { isDarkMode, setDarkmode } = useContext<UserData>(UserDataContext);
    const background = isDarkMode === 'dark' ? Colors.PRIMARY[400] : Colors.PRIMARY[300];
    const textColor = isDarkMode === 'dark' ? Colors.PRIMARY[300] : Colors.PRIMARY[400];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      {/* Tab Header */}
      <View style={[styles.tabContainer, {backgroundColor:  background}]}>
        {screens.map((screen, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              activeTab === index ? styles.activeTabButton : styles.inactiveTabButton,
              index === screens.length - 1 ? { marginRight: 0 } : { marginRight: -2 }, 
            ]}
            onPress={() => setActiveTab(index)}
          >
            <TextView style={activeTab === index ? styles.activeTabText : [styles.tabText,{color:textColor}]}>
              {screen.name}
            </TextView>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tab Content */}
      <View style={styles.screenContainer}>
        {screens.map((screen, index) => (
          activeTab === index ? <screen.component key={index} /> : null
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  } as ViewStyle,
  tabButton: {
    flex: 1, 
    paddingVertical: 8,
    alignItems: 'center',
  } as ViewStyle,
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.PRIMARY[100], 
  } as ViewStyle,
  inactiveTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc', 
  } as ViewStyle,
  tabText: {
    fontSize: 16,
    // color: '#333',
  } as TextStyle,
  activeTabText: {
    fontSize: 16,
    color: Colors.PRIMARY[100],
    fontWeight: 'bold',
  } as TextStyle,
  screenContainer: {
    flex: 1,
  } as ViewStyle,
});

export default TopTabNavigator;
