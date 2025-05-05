import {StackNavigationProp} from '@react-navigation/stack';
import MyHomeAppBar from '../components/bars/HomeAppBar';
import MyHomeNavigationBar from '../components/bars/HomeNavigationBar';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyRoutes} from '../enums/Routes';
import MyColorUtils from '../utils/ColorUtils';

const MyFavoritesScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  return (
    <MyView isColumn isExpanded>
      <MyHomeAppBar />
      <MyView
        isColumn
        isExpanded
        isCenterItems
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
        <MyText text="Favorites" />
      </MyView>
      <MyHomeNavigationBar currentRoute={MyRoutes.Favorites} />
    </MyView>
  );
};

export default MyFavoritesScreen;
