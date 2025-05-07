import {MyIcons} from '../../enums/Icons';
import {MyNavigationBarRoutes} from '../../enums/NavigationBarRoutes';
import MyNavigationBarButtonDataModel from '../../models/NavigationBarButtonDataModel';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyNavigationBar from './NavigationBar';

const MyHomeNavigationBar = ({
  selectedRoute,
}: {
  selectedRoute: MyObservableValueModel<MyNavigationBarRoutes>;
}) => {
  return (
    <MyNavigationBar
      buttonList={[
        new MyNavigationBarButtonDataModel({
          icon: MyIcons.HomeOutlined,
          activeIcon: MyIcons.Home,
          text: MyLocalizationUtils.getLocalizedHomeText(),
          route: MyNavigationBarRoutes.Dashboard,
        }),
        new MyNavigationBarButtonDataModel({
          icon: MyIcons.FolderOutlined,
          activeIcon: MyIcons.Folder,
          text: MyLocalizationUtils.getLocalizedReposText(),
          route: MyNavigationBarRoutes.Repos,
        }),
        new MyNavigationBarButtonDataModel({
          icon: MyIcons.ShareOutlined,
          activeIcon: MyIcons.Share,
          text: MyLocalizationUtils.getLocalizedSharingText(),
          route: MyNavigationBarRoutes.Sharing,
        }),
        new MyNavigationBarButtonDataModel({
          icon: MyIcons.StarOutlined,
          activeIcon: MyIcons.Star,
          text: MyLocalizationUtils.getLocalizedFavoritesText(),
          route: MyNavigationBarRoutes.Favorites,
        }),
        new MyNavigationBarButtonDataModel({
          icon: MyIcons.AccountOutlined,
          activeIcon: MyIcons.Account,
          text: MyLocalizationUtils.getLocalizedProfileText(),
          route: MyNavigationBarRoutes.Profile,
        }),
      ]}
      selectedRoute={selectedRoute}
    />
  );
};

export default MyHomeNavigationBar;
