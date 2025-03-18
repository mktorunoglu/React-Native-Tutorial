import React from 'react';
import { Text } from 'react-native';
import { MyFontWeights } from '../../enums/FontWeights';
import { MyTextAligns } from '../../enums/TextAligns';

const MyText: React.FC<{
    text: string;
    color?: string;
    fontSize?: number;
    fontWeight?: MyFontWeights;
    textAlign?: MyTextAligns;
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
