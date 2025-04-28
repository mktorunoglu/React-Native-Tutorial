import {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyStatusBar from '../bars/StatusBar';

const MySafeAreaView = ({
  safeOnlyTop,
  safeOnlyBottom,
  children,
}: {
  safeOnlyTop?: boolean;
  safeOnlyBottom?: boolean;
  children?: ReactNode;
}) => {
  return (
    <SafeAreaView
      edges={
        safeOnlyTop ? ['top'] : safeOnlyBottom ? ['bottom'] : ['top', 'bottom']
      }
      style={{
        flex: 1,
      }}>
      <MyStatusBar />
      {children}
    </SafeAreaView>
  );
};

export default MySafeAreaView;
