import {StackNavigationProp} from '@react-navigation/stack';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';

// TEST
const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  return <MyView></MyView>;
};

export default MyTestScreen;
