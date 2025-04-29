import {SafeAreaView} from 'react-native-safe-area-context';
import MyStatusBar from '../bars/StatusBar';

const MySafeAreaView = ({
  safeOnlyTop,
  safeOnlyBottom,
}: {
  safeOnlyTop?: boolean;
  safeOnlyBottom?: boolean;
}) => {
  return (
    <SafeAreaView
      edges={
        safeOnlyTop ? ['top'] : safeOnlyBottom ? ['bottom'] : ['top', 'bottom']
      }>
      <MyStatusBar />
    </SafeAreaView>
  );
};

export default MySafeAreaView;
