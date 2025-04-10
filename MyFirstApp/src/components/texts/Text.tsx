import { Text } from "react-native-paper";
import { MyFontWeights } from "../../enums/FontWeights";
import { MyTextAligns } from "../../enums/TextAligns";

const MyText = ({
    text,
    color,
    fontSize,
    fontWeight,
    textAlign,
}: {
    text: string;
    color?: string;
    fontSize?: number;
    fontWeight?: MyFontWeights;
    textAlign?: MyTextAligns;
}) => {
    return <Text
        style={{
            color,
            fontSize,
            fontWeight,
            textAlign,
        }}>
        {text}
    </Text>;
};

export default MyText;
