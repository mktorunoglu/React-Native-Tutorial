import {RouteProp, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyHomeAppBar from '../components/bars/HomeAppBar';
import MyHomeNavigationBar from '../components/bars/HomeNavigationBar';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyNavigationBarRoutes} from '../enums/NavigationBarRoutes';
import {MyRoutes} from '../enums/Routes';
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
  const route = useRoute<RouteProp<MyRouteProps, MyRoutes.Home>>();
  const {initialRoute = MyNavigationBarRoutes.Dashboard} = route.params ?? {};
  const selectedRoute = new MyObservableValueModel(initialRoute);
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
        return <MyDashboardBodyScreen selectedRoute={selectedRoute} />;
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
