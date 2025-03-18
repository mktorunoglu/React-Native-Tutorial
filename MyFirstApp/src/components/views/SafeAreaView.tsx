import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const MySafeAreaView: React.FC<{
    children: ReactNode;
}> = ({
    children,
}) => {
        return <SafeAreaView
            style={[{
                flex: 1,
            }]}>
            {children}
        </SafeAreaView>;
    };

export default MySafeAreaView;
