import {
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import { FC } from "react";
import { TextView } from "../index";
import _ from "lodash";
import Icon from "../../constant/Icon";
import { Colors } from "../../constant";


interface ButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  title?: string | null;
  buttonWidth?: string | number;
  leftIcon?: true;
  disabled?: boolean;
  buttonColor?: string;
  leftIconFamily?: any;
  leftIconName?: any;
  rightIcon?: true;
  rightIconFamily?: any;
  rightIconName?: any;
}

const Button: FC<ButtonProps> = ( {
  onPress,
  style,
  title,
  buttonWidth ,
  disabled,
  buttonColor,
  leftIcon,
  leftIconFamily,
  leftIconName,
  rightIcon,
  rightIconFamily,
  rightIconName,
} ) => {
  const { buttonContainer, buttonView, touchableOpacityStyle, buttonText , disabledButtonContainer} =
    styles;

  const handleClick = () => {
    try {
      if ( onPress ) {
        _.debounce( onPress, 500 )();
      }
    } catch ( error ) {
      console.warn( "handleClick", error );
    }
  };

  return (
    <TouchableOpacity
      style={ [
        touchableOpacityStyle,
        style,

      ] }
      onPress={ () => handleClick() }
    >
      <View style={ [  disabled ? disabledButtonContainer : buttonContainer,
            {
              backgroundColor: buttonColor
                ? buttonColor
                : disabled
                ? Colors.SECONDARY[200]
                : Colors.PRIMARY[100],
            },
        //@ts-ignore
        { width:buttonWidth } ] }>
        { leftIcon && (
          <Icon
            family={ leftIconFamily }
            name={ leftIconName }
            size={ 20 }
            color={ Colors.NEUTRAL[ 100 ] }
          />
        ) }

        <View style={ buttonView }>
          <TextView style={ buttonText }>{ title }</TextView>
        </View>

        { rightIcon && (
          <Icon
            family={ rightIconFamily }
            name={ rightIconName }
            size={ 20 }
            color={ Colors.NEUTRAL[ 100 ] }
          />
        ) }
      </View>
    </TouchableOpacity>
  );
};

export default Button;
