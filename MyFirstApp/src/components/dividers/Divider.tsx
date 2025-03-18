import React from 'react';
import { DimensionValue } from 'react-native';
import { MyColors } from '../../enums/Colors';
import ColorUtils from '../../utils/ColorUtils';
import MyView from '../views/View';

const MyDivider: React.FC<{
    width?: DimensionValue,
    thickness?: number;
    color?: string;
}> = ({
    width = "100%",
    thickness = 1,
    color = ColorUtils.getColorWithOpacity(MyColors.Grey, 0.3),
}) => {
        return <MyView
            height={thickness}
            width={width}
            backgroundColor={color} />;
    };

export default MyDivider;
