import { TextInput } from 'react-native-paper';
import { MyColors } from '../../enums/Colors';
import { MyIcons } from '../../enums/Icons';
import ColorUtils from '../../utils/ColorUtils';
import MyIcon from '../icons/Icon';

const MyTextInput: React.FC<{
    outlineColor?: string;
    backgroundColor?: string;
    labelText?: string;
    rightIcon?: MyIcons;
    onPressRightIcon?: () => void;
}> = ({
    outlineColor = ColorUtils.getColorWithOpacity(MyColors.Grey, 0.5),
    backgroundColor = MyColors.Transparent,
    labelText,
    rightIcon,
    onPressRightIcon,
}) => {
        const isThereRightIconFunction = onPressRightIcon != null;
        return <TextInput
            mode="outlined"
            outlineColor={outlineColor}
            label={labelText}
            right={rightIcon == null ? undefined : <TextInput.Icon
                icon={() => <MyIcon
                    icon={rightIcon}
                    color={isThereRightIconFunction ? undefined : MyColors.Grey} />}
                color={isThereRightIconFunction ? undefined : MyColors.White}
                onPress={onPressRightIcon} />}
            style={[{
                backgroundColor,
            }]} />;
    };

export default MyTextInput;
