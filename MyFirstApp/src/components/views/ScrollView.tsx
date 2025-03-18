import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';

const MyScrollView: React.FC<{
    paddingVertical?: number;
    paddingHorizontal?: number;
    showScrollBar?: boolean;
    children: ReactNode;
}> = ({
    paddingVertical,
    paddingHorizontal,
    showScrollBar = false,
    children,
}) => {
        return <ScrollView
            showsVerticalScrollIndicator={showScrollBar}
            showsHorizontalScrollIndicator={showScrollBar}
            style={[{
                paddingVertical,
                paddingHorizontal,
            }]}>
            {children}
        </ScrollView>;
    };

export default MyScrollView;
