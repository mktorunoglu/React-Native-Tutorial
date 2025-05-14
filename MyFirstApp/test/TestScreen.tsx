import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import MyButton from '../src/components/buttons/Button';
import MyCardModalScaffold from '../src/components/scaffolds/CardModalScaffold';
import MyScreenScaffold from '../src/components/scaffolds/ScreenScaffold';
import MyText from '../src/components/texts/Text';
import MyTextInput from '../src/components/texts/TextInput';
import MyView from '../src/components/views/View';
import {MyRouteProps} from '../src/constants/RouteProps';
import {MyModalKeys} from '../src/enums/ModalKeys';
import MyModalDataModel from '../src/models/ModalDataModel';
import MyTestModalUtils from '../src/utils/TestModalUtils';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const modal = ({text}: {text: string}) => (
    <MyCardModalScaffold>
      <MyTextInput labelText={text} />
      <MyText text={'screen' + text} />
      <MyButton
        text={'add 1'}
        onPress={() =>
          MyTestModalUtils.showModal({
            modalModel: new MyModalDataModel({
              key: MyModalKeys.TestOne,
              modal: modal({text: '1'}),
            }),
          })
        }
      />
      <MyButton
        text={'add 2'}
        onPress={() =>
          MyTestModalUtils.showModal({
            modalModel: new MyModalDataModel({
              key: MyModalKeys.TestTwo,
              modal: modal({text: '2'}),
            }),
          })
        }
      />
      <MyButton
        text={'add 3'}
        onPress={() =>
          MyTestModalUtils.showModal({
            modalModel: new MyModalDataModel({
              key: MyModalKeys.TestThree,
              modal: modal({text: '3'}),
            }),
          })
        }
      />
      <MyButton
        text={'remove 1'}
        onPress={() =>
          MyTestModalUtils.hideModalByKey({
            modalKey: MyModalKeys.TestOne,
          })
        }
      />
      <MyButton
        text={'remove 2'}
        onPress={() =>
          MyTestModalUtils.hideModalByKey({
            modalKey: MyModalKeys.TestTwo,
          })
        }
      />
      <MyButton
        text={'remove 3'}
        onPress={() =>
          MyTestModalUtils.hideModalByKey({
            modalKey: MyModalKeys.TestThree,
          })
        }
      />
    </MyCardModalScaffold>
  );
  const onInit = () =>
    MyTestModalUtils.showModal({
      modalModel: new MyModalDataModel({
        key: MyModalKeys.TestOne,
        modal: modal({text: '1'}),
      }),
    });
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
