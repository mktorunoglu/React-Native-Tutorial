import { Button } from 'react-native-paper';
import { MyColors } from '../../enums/Colors';
import { MyFontWeights } from '../../enums/FontWeights';
import MyColorUtils from '../../utils/ColorUtils';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyButton: React.FC<{
    backgroundColor?: string;
    foregroundColor?: string;
    icon?: string;
    text: string;
    onPress?: () => void;
}> = ({
    backgroundColor = MyColors.Theme,
    foregroundColor = MyColors.White,
    icon,
    text,
    onPress,
}) => {
        const isDisable = onPress == null;
        const backgroundColor_ = isDisable ? MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.2) : backgroundColor;
        const foregroundColor_ = isDisable ? MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.6) : foregroundColor;
        return <Button
            mode="contained"
            onPress={onPress}
            buttonColor={backgroundColor_}
            rippleColor={MyColorUtils.getColorWithOpacity(foregroundColor_, 0.2)}
            textColor={foregroundColor_}
            icon={icon}>
            {icon &&
                <MyView
                    width={5} />}
            <MyText
                text={text}
                color={foregroundColor_}
                fontWeight={MyFontWeights.Bold} />
        </Button>;
    };

export default MyButton;
