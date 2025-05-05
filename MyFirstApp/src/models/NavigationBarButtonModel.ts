import {MyIcons} from '../enums/Icons';
import {MyRoutes} from '../enums/Routes';

class MyNavigationBarButtonModel {
  icon: MyIcons;
  activeIcon: MyIcons;
  text: string;
  route: MyRoutes;

  constructor({
    icon,
    activeIcon,
    text,
    route,
  }: {
    icon: MyIcons;
    activeIcon: MyIcons;
    text: string;
    route: MyRoutes;
  }) {
    this.icon = icon;
    this.activeIcon = activeIcon;
    this.text = text;
    this.route = route;
  }
}

export default MyNavigationBarButtonModel;
