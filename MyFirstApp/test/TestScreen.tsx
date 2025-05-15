import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import MyTabBar from '../src/components/bars/TabBar';
import MyDataPickerButton from '../src/components/buttons/DataPickerButton';
import MyDivider from '../src/components/dividers/Divider';
import MyScreenScaffold from '../src/components/scaffolds/ScreenScaffold';
import MyView from '../src/components/views/View';
import {MyRouteProps} from '../src/constants/RouteProps';
import MyObservableValueModel from '../src/models/ObservableValueModel';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const tabNameList = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4',
    'Test 5',
    'Test 6',
    'Test 7',
    'Test 8',
    'Test 9',
  ];
  const selectedTabName = new MyObservableValueModel(tabNameList[0]);
  const onInit = () => {};
  useEffect(() => {
    onInit();
  }, []);
  return (
    <MyScreenScaffold>
      <MyView isColumn isExpanded>
        <MyDivider />
        <MyTabBar tabNameList={tabNameList} selectedTabName={selectedTabName} />
        <MyDataPickerButton
          labelText="Select Permission"
          labelTextOnSelect="Permission"
          valueText=""
          onPress={() => {}}
        />
        <MyDataPickerButton
          labelText="Select Permission"
          labelTextOnSelect="Permission"
          valueText="Read-Only"
          onPress={() => {}}
        />
        <MyView isColumn isExpanded isCenterItems></MyView>
      </MyView>
    </MyScreenScaffold>
  );
};

export default MyTestScreen;
