import { TextInput } from 'react-native-paper';
import { MyColors } from '../../enums/Colors';
import ColorUtils from '../../utils/ColorUtils';

const MyTextInput: React.FC<{
    outlineColor?: string;
    backgroundColor?: string;
    labelText?: string;
}> = ({
    outlineColor = ColorUtils.getColorWithOpacity(MyColors.Grey, 0.5),
    backgroundColor = MyColors.Transparent,
    labelText,
}) => {
        return <TextInput
            mode="outlined"
            outlineColor={outlineColor}
            label={labelText}
            style={[{
                backgroundColor,
            }]} />;
    };

export default MyTextInput;
