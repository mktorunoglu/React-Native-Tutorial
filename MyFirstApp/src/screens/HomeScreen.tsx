import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyBottomNavigation from '../components/navigations/BottomNavigation';
import {MyRouteProps} from '../constants/RouteProps';
import {MyIcons} from '../enums/Icons';
import {MyLocalizationTextKeys} from '../enums/LocalizationTextKeys';
import {MyRoutes} from '../enums/Routes';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MyDashboardScreen from './DashboardScreen';
import MyFavoritesScreen from './FavoritesScreen';
import MyProfileScreen from './ProfileScreen';
import MyReposScreen from './ReposScreen';
import MySharingScreen from './SharingScreen';

const selectedBottomNavigationIndex = new MyObservableValueModel(0);

const MyHomeScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>;
}) => {
  return <BottomNavigation_ navigation={navigation} />;
};

const BottomNavigation_ = observer(
  ({
    navigation,
  }: {
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>;
  }) => {
    return (
      <MyBottomNavigation
        selectedIndex={selectedBottomNavigationIndex.value}
        onIndexChange={index => (selectedBottomNavigationIndex.value = index)}
        routeList={[
          {
            key: MyRoutes.Dashboard,
            title: MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.Home,
            ),
            focusedIcon: MyIcons.Home,
            unfocusedIcon: MyIcons.HomeOutlined,
          },
          {
            key: MyRoutes.Repos,
            title: MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.Repos,
            ),
            focusedIcon: MyIcons.Folder,
            unfocusedIcon: MyIcons.FolderOutlined,
          },
          {
            key: MyRoutes.Sharing,
            title: MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.Sharing,
            ),
            focusedIcon: MyIcons.Share,
            unfocusedIcon: MyIcons.ShareOutlined,
          },
          {
            key: MyRoutes.Favorites,
            title: MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.Favorites,
            ),
            focusedIcon: MyIcons.Star,
            unfocusedIcon: MyIcons.StarOutlined,
          },
          {
            key: MyRoutes.Profile,
            title: MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.Profile,
            ),
            focusedIcon: MyIcons.Account,
            unfocusedIcon: MyIcons.AccountOutlined,
          },
        ]}
        screenList={{
          [MyRoutes.Dashboard]: () => (
            <MyDashboardScreen navigation={navigation} />
          ),
          [MyRoutes.Repos]: () => <MyReposScreen navigation={navigation} />,
          [MyRoutes.Sharing]: () => <MySharingScreen navigation={navigation} />,
          [MyRoutes.Favorites]: () => (
            <MyFavoritesScreen navigation={navigation} />
          ),
          [MyRoutes.Profile]: () => <MyProfileScreen navigation={navigation} />,
        }}
      />
    );
  },
);

export default MyHomeScreen;
