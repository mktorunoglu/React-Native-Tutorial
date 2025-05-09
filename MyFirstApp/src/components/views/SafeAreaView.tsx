import {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const MySafeAreaView = ({children}: {children?: ReactNode}) => (
  <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
);

export default MySafeAreaView;
