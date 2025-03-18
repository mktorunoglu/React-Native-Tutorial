import React, { ReactNode } from 'react';
import { StatusBar } from 'react-native';
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
            <StatusBar barStyle="dark-content" />
            {children}
        </SafeAreaView>;
    };

export default MySafeAreaView;
