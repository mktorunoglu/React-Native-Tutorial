import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import MyButton from '../src/components/buttons/Button';
import MyRepoInputModal from '../src/components/modals/RepoInputModal';
import MyModalScaffold from '../src/components/scaffolds/CardModalScaffold';
import MyScreenScaffold from '../src/components/scaffolds/ScreenScaffold';
import MyTextInput from '../src/components/texts/TextInput';
import MyView from '../src/components/views/View';
import {MyRouteProps} from '../src/constants/RouteProps';
import MyModalUtils from '../src/utils/ModalUtils';
import MyNavigationUtils from '../src/utils/NavigationUtils';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const onInit = async () => {
    MyNavigationUtils.initialize();
  };
  useEffect(() => {
    onInit();
  }, []);
  const Modal_ = observer(() => (
    <MyModalScaffold>
      <MyView isColumn isExpanded isCenterItems>
        <MyView height={100}>
          <MyTextInput />
        </MyView>
        <MyButton text="Hide Modal" onPress={() => MyModalUtils.hideModal()} />
      </MyView>
    </MyModalScaffold>
  ));
  return (
    <MyScreenScaffold>
      <MyView isColumn isExpanded isCenterItems>
        <MyView height={100}>
          <MyTextInput />
        </MyView>
        <MyButton
          text="Show Modal"
          onPress={() =>
            MyModalUtils.showModal({
              modal: <MyRepoInputModal />,
            })
          }
        />
      </MyView>
    </MyScreenScaffold>
  );
};

export default MyTestScreen;
