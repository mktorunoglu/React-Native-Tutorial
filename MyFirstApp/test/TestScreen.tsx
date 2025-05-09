import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyButton from '../src/components/buttons/Button';
import MyProgressModal from '../src/components/modals/ProgressModal';
import MyModalScaffold from '../src/components/scaffolds/CardModalScaffold';
import MyScreenScaffold from '../src/components/scaffolds/ScreenScaffold';
import MyTextInput from '../src/components/texts/TextInput';
import MyView from '../src/components/views/View';
import {MyRouteProps} from '../src/constants/RouteProps';
import MyModalUtils from '../src/utils/ModalUtils';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
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
              modal: <MyProgressModal />,
            })
          }
        />
      </MyView>
    </MyScreenScaffold>
  );
};

export default MyTestScreen;
