import {StackNavigationProp} from '@react-navigation/stack';
import MyDivider from '../components/dividers/Divider';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyRoutes} from '../enums/Routes';
import MyColorUtils from '../utils/ColorUtils';

const MyFavoritesScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Favorites>;
}) => {
  return (
    <MyView isColumn isExpanded>
      <MyView
        isColumn
        isExpanded
        isCenterItems
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
        <MyText text="Favorites" />
      </MyView>
      <MyDivider />
    </MyView>
  );
};

export default MyFavoritesScreen;
