import { TextInput } from 'react-native-paper';
import { MyColors } from '../../enums/Colors';
import { MyIcons } from '../../enums/Icons';
import { MyKeyboardTypes } from '../../enums/KeyboardTypes';
import { MyTextCapitalizes } from '../../enums/TextCapitalizes';
import ColorUtils from '../../utils/ColorUtils';
import MyIcon from '../icons/Icon';

const MyTextInput: React.FC<{
    outlineColor?: string;
    backgroundColor?: string;
    textCapitalize?: MyTextCapitalizes;
    keyboardType?: MyKeyboardTypes;
    isTextObscured?: boolean;
    labelText?: string;
    rightIcon?: MyIcons;
    onPressRightIcon?: () => void;
}> = ({
    outlineColor = ColorUtils.getColorWithOpacity(MyColors.Grey, 0.5),
    backgroundColor = MyColors.Transparent,
    textCapitalize = MyTextCapitalizes.None,
    keyboardType = MyKeyboardTypes.Default,
    isTextObscured,
    labelText,
    rightIcon,
    onPressRightIcon,
}) => {
        const isThereRightIconFunction = onPressRightIcon != null;
        return <TextInput
            mode="outlined"
            outlineColor={outlineColor}
            autoCapitalize={textCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={isTextObscured}
            label={labelText}
            right={rightIcon == null ? undefined : <TextInput.Icon
                icon={() => <MyIcon
                    icon={rightIcon}
                    color={isThereRightIconFunction ? undefined : MyColors.Grey} />}
                forceTextInputFocus={!isThereRightIconFunction}
                color={isThereRightIconFunction ? undefined : MyColors.White}
                onPress={onPressRightIcon} />}
            style={[{
                backgroundColor,
            }]} />;
    };

export default MyTextInput;
