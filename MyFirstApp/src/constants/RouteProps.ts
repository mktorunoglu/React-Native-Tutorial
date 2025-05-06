import {MyNavigationBarRoutes} from '../enums/NavigationBarRoutes';
import {MyRoutes} from '../enums/Routes';

export type MyRouteProps = {
  [MyRoutes.Home]: {initialRoute: MyNavigationBarRoutes};
  [MyRoutes.Login]: undefined;
  [MyRoutes.Splash]: undefined;
  [MyRoutes.Test]: undefined;
};
