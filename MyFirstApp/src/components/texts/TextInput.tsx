import {TextInput} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MyKeyboardTypes} from '../../enums/KeyboardTypes';
import {MyTextCapitalizes} from '../../enums/TextCapitalizes';
import MyColorUtils from '../../utils/ColorUtils';
import MyIcon from '../icons/Icon';

const MyTextInput = ({
  outlineColor = MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.5),
  activeOutlineColor = MyColors.Theme,
  backgroundColor = MyColors.White,
  cursorColor = MyColors.Theme,
  textCapitalize = MyTextCapitalizes.None,
  keyboardType = MyKeyboardTypes.Default,
  isTextObscured = false,
  isEditable = true,
  labelText,
  labelTextColor,
  hintText,
  hintTextColor,
  leftIcon,
  rightIcon,
  value,
  onChangeText,
  onPressLeftIcon,
  onPressRightIcon,
}: {
  outlineColor?: string;
  activeOutlineColor?: string;
  backgroundColor?: string;
  cursorColor?: string;
  textCapitalize?: MyTextCapitalizes;
  keyboardType?: MyKeyboardTypes;
  isTextObscured?: boolean;
  isEditable?: boolean;
  labelText?: string;
  labelTextColor?: string;
  hintText?: string;
  hintTextColor?: string;
  leftIcon?: MyIcons;
  rightIcon?: MyIcons;
  value?: string;
  onChangeText?: (text: string) => void;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
}) => {
  const isThereLeftIconFunction = onPressLeftIcon != null;
  const isThereRightIconFunction = onPressRightIcon != null;
  return (
    <TextInput
      mode="outlined"
      outlineColor={outlineColor}
      activeOutlineColor={activeOutlineColor}
      cursorColor={cursorColor}
      autoCapitalize={textCapitalize}
      keyboardType={keyboardType}
      secureTextEntry={isTextObscured}
      editable={isEditable}
      label={labelText}
      placeholder={hintText}
      placeholderTextColor={hintTextColor}
      left={
        leftIcon == null ? undefined : (
          <TextInput.Icon
            icon={() => (
              <MyIcon
                icon={leftIcon}
                color={isThereLeftIconFunction ? undefined : MyColors.Grey}
              />
            )}
            forceTextInputFocus={!isThereLeftIconFunction}
            color={isThereLeftIconFunction ? undefined : MyColors.White}
            onPress={onPressLeftIcon}
          />
        )
      }
      right={
        rightIcon == null ? undefined : (
          <TextInput.Icon
            icon={() => (
              <MyIcon
                icon={rightIcon}
                color={isThereRightIconFunction ? undefined : MyColors.Grey}
              />
            )}
            forceTextInputFocus={!isThereRightIconFunction}
            color={isThereRightIconFunction ? undefined : MyColors.White}
            onPress={onPressRightIcon}
          />
        )
      }
      value={value}
      onChangeText={onChangeText}
      theme={{
        colors: {
          onSurfaceVariant: labelTextColor,
        },
      }}
      style={{
        backgroundColor,
      }}
    />
  );
};

export default MyTextInput;
