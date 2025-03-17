import React, { ReactNode } from 'react';
import { View } from 'react-native';

const MyView: React.FC<{
    flexDirection?: undefined;
    isColumn?: boolean;
    isRow?: boolean;
    children: ReactNode;
}> = ({
    flexDirection,
    isColumn,
    isRow,
    children,
}) => {
        return <View
            style={[{
                flexDirection: isColumn ? "column" : isRow ? "row" : flexDirection,
            }]}
        >
            {children}
        </View>;
    };

export default MyView;
