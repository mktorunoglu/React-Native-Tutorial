import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyHomeAppBar from '../components/bars/HomeAppBar';
import MyBottomNavigation from '../components/navigations/BottomNavigation';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
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
      <MyView isColumn isExpanded backgroundColor={MyColors.White}>
        <MyHomeAppBar />
        <MyView isExpanded>
          <MyBottomNavigation
            selectedIndex={selectedBottomNavigationIndex.getValue()}
            onIndexChange={index =>
              selectedBottomNavigationIndex.setValue(index)
            }
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
              [MyRoutes.Sharing]: () => (
                <MySharingScreen navigation={navigation} />
              ),
              [MyRoutes.Favorites]: () => (
                <MyFavoritesScreen navigation={navigation} />
              ),
              [MyRoutes.Profile]: () => (
                <MyProfileScreen navigation={navigation} />
              ),
            }}
          />
        </MyView>
      </MyView>
    );
  },
);

export default MyHomeScreen;
