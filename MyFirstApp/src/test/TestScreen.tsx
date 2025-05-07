import {StackNavigationProp} from '@react-navigation/stack';
import MyButton from '../components/buttons/Button';
import MyAlertModal from '../components/modals/AlertModal';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import MyModalUtils from '../utils/ModalUtils';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  return (
    <MyView isExpanded isCenterItems>
      <MyButton
        text="test"
        onPress={() => {
          MyModalUtils.showModal({
            modal: (
              <MyAlertModal
                titleText="A"
                messageText="B"
                buttonText="C"
                buttonColor={MyColors.Red}
              />
            ),
          });
        }}
      />
    </MyView>
  );
};

export default MyTestScreen;
