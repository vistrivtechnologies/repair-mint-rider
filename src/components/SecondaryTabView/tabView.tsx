import {FC, useEffect, useState} from 'react';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import TextView from '../TextView/textView';
import {Colors} from '../../constant';

export interface TabArray {
  id: number;
  tabName: string;
}

interface TabViewProps {
  tabArray: Array<TabArray>;
  onPressTab?: (selectedId: number) => void;
  selectedTab: number;
}

const SecondaryTabView: FC<TabViewProps> = ({
  tabArray,
  onPressTab,
  selectedTab,
}) => {
  const {container, buttonTextStyle} = styles;
  const [selectedItems, setSelectedItems] = useState(selectedTab);

  // Update selectedItems when selectedTab changes
  useEffect(() => {
    setSelectedItems(selectedTab);
  }, [selectedTab]);

  return (
    <View style={container}>
      {tabArray.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.id.toString()}
            onPress={() => {
              setSelectedItems(item.id);
              if (onPressTab) {
                onPressTab(item.id);
              }
            }}
            style={[
              styles.tabButtons,
              {
                backgroundColor:
                  selectedItems === item.id
                    ? Colors.SECONDARY[600]
                    : Colors.PRIMARYRGB[100],
                borderTopLeftRadius: index === 0 ? 50 : 0,
                borderBottomLeftRadius: index === 0 ? 50 : 0,
                borderTopRightRadius: index === tabArray.length - 1 ? 50 : 0,
                borderBottomRightRadius: index === tabArray.length - 1 ? 50 : 0,
              },
            ]}>
            <TextView
              style={[
                buttonTextStyle,
                {
                  color:
                    selectedItems === item.id
                      ? Colors.NEUTRAL[100]
                      : Colors.PRIMARY[500],
                },
              ]}>
              {item.tabName}
            </TextView>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SecondaryTabView;
