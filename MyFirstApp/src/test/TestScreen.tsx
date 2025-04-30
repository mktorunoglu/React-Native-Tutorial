import {StackNavigationProp} from '@react-navigation/stack';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyRoutes} from '../enums/Routes';

const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Test>;
}) => {
  return (
    <MyView isColumn isExpanded isCenterItems>
      <MyText text="Test" />
    </MyView>
  );
};

export default MyTestScreen;
