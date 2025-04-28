import {StackNavigationProp} from '@react-navigation/stack';
import MyStatusBar from '../components/bars/StatusBar';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyRoutes} from '../enums/Routes';
import MyColorUtils from '../utils/ColorUtils';

const MyDashboardScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>;
}) => {
  return (
    <MyView
      isExpanded
      isColumn
      isCenterItems
      backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
      <MyStatusBar />
      <MyText text="Dashboard" />
    </MyView>
  );
};

export default MyDashboardScreen;
