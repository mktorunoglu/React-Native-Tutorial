import {MyIcons} from '../../enums/Icons';
import {MyRoutes} from '../../enums/Routes';
import MyNavigationBarButtonModel from '../../models/NavigationBarButtonModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyNavigationBar from './NavigationBar';

const MyHomeNavigationBar = ({currentRoute}: {currentRoute: MyRoutes}) => {
  return (
    <MyNavigationBar
      buttonList={[
        new MyNavigationBarButtonModel({
          icon: MyIcons.HomeOutlined,
          activeIcon: MyIcons.Home,
          text: MyLocalizationUtils.getLocalizedHomeText(),
          route: MyRoutes.Dashboard,
        }),
        new MyNavigationBarButtonModel({
          icon: MyIcons.FolderOutlined,
          activeIcon: MyIcons.Folder,
          text: MyLocalizationUtils.getLocalizedReposText(),
          route: MyRoutes.Repos,
        }),
        new MyNavigationBarButtonModel({
          icon: MyIcons.ShareOutlined,
          activeIcon: MyIcons.Share,
          text: MyLocalizationUtils.getLocalizedSharingText(),
          route: MyRoutes.Sharing,
        }),
        new MyNavigationBarButtonModel({
          icon: MyIcons.StarOutlined,
          activeIcon: MyIcons.Star,
          text: MyLocalizationUtils.getLocalizedFavoritesText(),
          route: MyRoutes.Favorites,
        }),
        new MyNavigationBarButtonModel({
          icon: MyIcons.AccountOutlined,
          activeIcon: MyIcons.Account,
          text: MyLocalizationUtils.getLocalizedProfileText(),
          route: MyRoutes.Profile,
        }),
      ]}
      currentRoute={currentRoute}
    />
  );
};

export default MyHomeNavigationBar;
