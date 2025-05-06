import {MyIcons} from '../enums/Icons';
import {MyNavigationBarRoutes} from '../enums/NavigationBarRoutes';

class MyNavigationBarButtonModel {
  icon: MyIcons;
  activeIcon: MyIcons;
  text: string;
  route: MyNavigationBarRoutes;

  constructor({
    icon,
    activeIcon,
    text,
    route,
  }: {
    icon: MyIcons;
    activeIcon: MyIcons;
    text: string;
    route: MyNavigationBarRoutes;
  }) {
    this.icon = icon;
    this.activeIcon = activeIcon;
    this.text = text;
    this.route = route;
  }
}

export default MyNavigationBarButtonModel;
