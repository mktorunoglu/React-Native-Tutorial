import {TextInput} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MyKeyboardTypes} from '../../enums/KeyboardTypes';
import {MyTextCapitalizes} from '../../enums/TextCapitalizes';
import MyColorUtils from '../../utils/ColorUtils';
import MyIcon from '../icons/Icon';

const MyTextInput = ({
  outlineColor = MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.5),
  backgroundColor = MyColors.Transparent,
  textCapitalize = MyTextCapitalizes.None,
  keyboardType = MyKeyboardTypes.Default,
  isTextObscured = false,
  isEditable = true,
  labelText,
  labelTextColor,
  rightIcon,
  value,
  onChangeText,
  onPressRightIcon,
}: {
  outlineColor?: string;
  backgroundColor?: string;
  textCapitalize?: MyTextCapitalizes;
  keyboardType?: MyKeyboardTypes;
  isTextObscured?: boolean;
  isEditable?: boolean;
  labelText?: string;
  labelTextColor?: string;
  rightIcon?: MyIcons;
  value?: string;
  onChangeText?: (text: string) => void;
  onPressRightIcon?: () => void;
}) => {
  const isThereRightIconFunction = onPressRightIcon != null;
  return (
    <TextInput
      mode="outlined"
      outlineColor={outlineColor}
      autoCapitalize={textCapitalize}
      keyboardType={keyboardType}
      secureTextEntry={isTextObscured}
      editable={isEditable}
      label={labelText}
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
