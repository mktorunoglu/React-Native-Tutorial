import {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyStatusBar from '../bars/StatusBar';

const MySafeAreaView = ({children}: {children?: ReactNode}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <MyStatusBar />
      {children}
    </SafeAreaView>
  );
};

export default MySafeAreaView;
