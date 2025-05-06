import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyHomeAppBar from '../components/bars/HomeAppBar';
import MyHomeNavigationBar from '../components/bars/HomeNavigationBar';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyNavigationBarRoutes} from '../enums/NavigationBarRoutes';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyColorUtils from '../utils/ColorUtils';
import MyDashboardBodyScreen from './DashboardBodyScreen';
import MyFavoritesBodyScreen from './FavoritesBodyScreen';
import MyProfileBodyScreen from './ProfileBodyScreen';
import MyReposBodyScreen from './ReposBodyScreen';
import MySharingBodyScreen from './SharingBodyScreen';

const MyHomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const selectedRoute = new MyObservableValueModel(
    MyNavigationBarRoutes.Dashboard,
  );
  const BodyScreen_ = observer(() => {
    switch (selectedRoute.value) {
      case MyNavigationBarRoutes.Repos:
        return <MyReposBodyScreen />;
      case MyNavigationBarRoutes.Sharing:
        return <MySharingBodyScreen />;
      case MyNavigationBarRoutes.Favorites:
        return <MyFavoritesBodyScreen />;
      case MyNavigationBarRoutes.Profile:
        return <MyProfileBodyScreen />;
      default:
        return <MyDashboardBodyScreen />;
    }
  });
  return (
    <MyView isColumn isExpanded>
      <MyHomeAppBar />
      <MyView
        isExpanded
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
        <BodyScreen_ />
      </MyView>
      <MyHomeNavigationBar selectedRoute={selectedRoute} />
    </MyView>
  );
};

export default MyHomeScreen;
