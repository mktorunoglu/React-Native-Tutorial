import { ReactNode } from 'react';
import { DimensionValue, View } from 'react-native';
import { MyAligns } from '../../enums/Aligns';
import { MyPositions } from '../../enums/Positions';

const MyView: React.FC<{
    flexDirection?: undefined;
    isColumn?: boolean;
    isRow?: boolean;
    isExpanded?: boolean;
    isCenterItems?: boolean;
    height?: DimensionValue,
    width?: DimensionValue,
    position?: MyPositions,
    zIndex?: number,
    top?: DimensionValue,
    right?: DimensionValue,
    bottom?: DimensionValue,
    left?: DimensionValue,
    borderRadius?: number,
    borderWidth?: number,
    borderColor?: string,
    margin?: DimensionValue,
    marginVertical?: DimensionValue,
    marginHorizontal?: DimensionValue,
    padding?: DimensionValue,
    paddingVertical?: DimensionValue,
    paddingHorizontal?: DimensionValue,
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
    position,
    zIndex,
    top,
    right,
    bottom,
    left,
    borderRadius,
    borderWidth,
    borderColor,
    margin,
    marginVertical,
    marginHorizontal,
    padding,
    paddingVertical,
    paddingHorizontal,
    alignItems,
    justifyContent,
    backgroundColor,
    children,
}) => {
        return <View
            style={[{
                flexDirection: isColumn ? "column" : isRow ? "row" : flexDirection,
                flex: isExpanded ? 1 : undefined,
                position: zIndex == null ? position : MyPositions.Absolute,
                height,
                width,
                zIndex,
                top,
                right,
                bottom,
                left,
                borderRadius,
                borderWidth,
                borderColor,
                margin,
                marginVertical,
                marginHorizontal,
                padding,
                paddingVertical,
                paddingHorizontal,
                alignItems: isCenterItems ? MyAligns.Center : alignItems,
                justifyContent: isCenterItems ? MyAligns.Center : justifyContent,
                backgroundColor,
            }]}>
            {children}
        </View>;
    };

export default MyView;
