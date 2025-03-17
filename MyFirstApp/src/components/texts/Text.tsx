import React from 'react';
import { Text } from 'react-native';
import { MyAligns } from '../../enums/Aligns';
import { MyColors } from '../../enums/Colors';
import { MyFontWeights } from '../../enums/FontWeights';

const MyText: React.FC<{
    text: string;
    color?: MyColors;
    fontSize?: number;
    fontWeight?: MyFontWeights;
    textAlign?: MyAligns;
}> = ({
    text,
    color,
    fontSize,
    fontWeight,
    textAlign,
}) => {
        return <Text
            style={[{
                color,
                fontSize,
                fontWeight,
                textAlign,
            }]}>
            {text}
        </Text>;
    };

export default MyText;
