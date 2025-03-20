import { ReactNode } from 'react';
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
                height,
                width,
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
