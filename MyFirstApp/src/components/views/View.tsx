import React, { ReactNode } from 'react';
import { DimensionValue, View } from 'react-native';
import { MyAligns } from '../../enums/Aligns';

const MyView: React.FC<{
    flexDirection?: undefined;
    isColumn?: boolean;
    isRow?: boolean;
    isExpanded?: boolean;
    isCenterItems?: boolean;
    height?: DimensionValue,
    width?: DimensionValue,
    alignItems?: MyAligns,
    justifyContent?: MyAligns,
    backgroundColor?: string;
    children?: ReactNode;
}> = ({
    flexDirection,
    isColumn,
    isRow,
    isExpanded,
    isCenterItems,
    height,
    width = "100%",
    alignItems,
    justifyContent,
    backgroundColor,
    children,
}) => {
        return <View
            style={[{
                flexDirection: isColumn ? "column" : isRow ? "row" : flexDirection,
                flex: isExpanded ? 1 : undefined,
                height,
                width,
                alignItems: isCenterItems ? MyAligns.Center : alignItems,
                justifyContent: isCenterItems ? MyAligns.Center : justifyContent,
                backgroundColor,
            }]}>
            {children}
        </View>;
    };

export default MyView;
