import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import MyUserPickerModal from '../src/components/modals/UserPickerModal';
import MyScreenScaffold from '../src/components/scaffolds/ScreenScaffold';
import MyView from '../src/components/views/View';
import {MyRouteProps} from '../src/constants/RouteProps';
import MyModalUtils from '../src/utils/ModalUtils';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const onInit = () => {
    MyModalUtils.showModal({
      modal: <MyUserPickerModal />,
    });
  };
  useEffect(() => {
    onInit();
  }, []);
  return (
    <MyScreenScaffold>
      <MyView isColumn isExpanded isCenterItems></MyView>
    </MyScreenScaffold>
  );
};

export default MyTestScreen;
