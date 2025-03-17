import React from 'react';
import { Text } from 'react-native';
import { MyAligns } from '../../enums/Aligns';
import { MyColors } from '../../enums/Colors';
import { MyFontWeights } from '../../enums/FontWeights';

const MyText: React.FC<{
    text: string;
    color?: MyColors;
    size?: number;
    fontWeight?: MyFontWeights;
    align?: MyAligns;
}> = ({
    text,
    color,
    size,
    fontWeight,
    align,
}) => {
        return <Text
            style={[{
                color,
                fontSize: size,
                fontWeight: fontWeight,
                textAlign: align,
            }]}
        >
            {text}
        </Text>;
    };

export default MyText;
