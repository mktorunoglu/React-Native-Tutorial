import { DimensionValue } from "react-native";
import { Button } from "react-native-paper";
import { MyColors } from "../../enums/Colors";
import { MyFontWeights } from "../../enums/FontWeights";
import MyColorUtils from "../../utils/ColorUtils";
import MyText from "../texts/Text";
import MyView from "../views/View";

const MyButton = ({
    isTextButton = false,
    isDisable = false,
    borderRadius = 5,
    padding,
    paddingVertical,
    paddingHorizontal,
    backgroundColor = MyColors.Theme,
    foregroundColor = isTextButton ? MyColors.Theme : MyColors.White,
    icon,
    text,
    onPress,
}: {
    isTextButton?: boolean,
    isDisable?: boolean,
    borderRadius?: number,
    padding?: DimensionValue,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
    backgroundColor?: string;
    foregroundColor?: string;
    icon?: string;
    text: string;
    onPress: () => void;
}) => {
    const backgroundColor_ = isTextButton ? MyColors.Transparent : (isDisable ? MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.2) : backgroundColor);
    const foregroundColor_ = isDisable ? MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.6) : foregroundColor;
    return <Button
        onPress={isDisable ? undefined : onPress}
        buttonColor={backgroundColor_}
        rippleColor={MyColorUtils.getColorWithOpacity(foregroundColor_, 0.2)}
        textColor={foregroundColor_}
        icon={icon}
        contentStyle={{
            borderRadius,
            padding,
            paddingVertical,
            paddingHorizontal,
        }}
        style={{
            borderRadius,
        }}>
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
