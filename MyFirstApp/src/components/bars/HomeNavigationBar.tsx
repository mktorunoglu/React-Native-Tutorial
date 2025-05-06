import {MyIcons} from '../../enums/Icons';
import {MyNavigationBarRoutes} from '../../enums/NavigationBarRoutes';
import MyNavigationBarButtonModel from '../../models/NavigationBarButtonModel';
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
        new MyNavigationBarButtonModel({
          icon: MyIcons.HomeOutlined,
          activeIcon: MyIcons.Home,
          text: MyLocalizationUtils.getLocalizedHomeText(),
          route: MyNavigationBarRoutes.Dashboard,
        }),
        new MyNavigationBarButtonModel({
          icon: MyIcons.FolderOutlined,
          activeIcon: MyIcons.Folder,
          text: MyLocalizationUtils.getLocalizedReposText(),
          route: MyNavigationBarRoutes.Repos,
        }),
        new MyNavigationBarButtonModel({
          icon: MyIcons.ShareOutlined,
          activeIcon: MyIcons.Share,
          text: MyLocalizationUtils.getLocalizedSharingText(),
          route: MyNavigationBarRoutes.Sharing,
        }),
        new MyNavigationBarButtonModel({
          icon: MyIcons.StarOutlined,
          activeIcon: MyIcons.Star,
          text: MyLocalizationUtils.getLocalizedFavoritesText(),
          route: MyNavigationBarRoutes.Favorites,
        }),
        new MyNavigationBarButtonModel({
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
