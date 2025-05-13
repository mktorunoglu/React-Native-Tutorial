import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import MyGroupPickerModal from '../src/components/modals/GroupPickerModal';
import MyScreenScaffold from '../src/components/scaffolds/ScreenScaffold';
import MyView from '../src/components/views/View';
import {MyRouteProps} from '../src/constants/RouteProps';
import MyGroupModel from '../src/models/GroupModel';
import MyObservableValueModel from '../src/models/ObservableValueModel';
import MyModalUtils from '../src/utils/ModalUtils';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const selectedGroup = new MyObservableValueModel(new MyGroupModel({}));
  const onInit = () => {
    MyModalUtils.showModal({
      modal: <MyGroupPickerModal selectedGroup={selectedGroup} />,
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
