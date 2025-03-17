import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { MyColors } from '../../enums/Colors';

const MyView: React.FC<{
    flexDirection?: undefined;
    isColumn?: boolean;
    isRow?: boolean;
    height?: number,
    width?: number,
    backgroundColor?: MyColors;
    children: ReactNode;
}> = ({
    flexDirection,
    isColumn,
    isRow,
    height,
    width,
    backgroundColor,
    children,
}) => {
        return <View style={[{
            flexDirection: isColumn ? "column" : isRow ? "row" : flexDirection,
            height: height,
            width: width,
            backgroundColor: backgroundColor,
        }]}>{children}</View>;
    };

export default MyView;
