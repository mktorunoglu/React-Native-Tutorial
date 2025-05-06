import {StackNavigationProp} from '@react-navigation/stack';
import {MyRouteProps} from '../constants/RouteProps';
import {MyKeys} from '../enums/Keys';
import {MyNavigationBarRoutes} from '../enums/NavigationBarRoutes';
import {MyRoutes} from '../enums/Routes';
import MyUserService from '../services/UserService';
import MyServiceUtils from './ServiceUtils';
import MyStorageUtils from './StorageUtils';

class MyAuthenticationUtils {
  private static instance: MyAuthenticationUtils;

  private constructor() {}

  public static getInstance(): MyAuthenticationUtils {
    if (!MyAuthenticationUtils.instance) {
      MyAuthenticationUtils.instance = new MyAuthenticationUtils();
    }
    return MyAuthenticationUtils.instance;
  }

  public async autoLogin({
    navigation,
  }: {
    navigation: StackNavigationProp<MyRouteProps>;
  }) {
    const userId = (await MyStorageUtils.getData(MyKeys.CurrentUserId)) ?? '';
    const password =
      (await MyStorageUtils.getData(MyKeys.CurrentUserPassword)) ?? '';
    if (
      userId !== '' &&
      password !== '' &&
      (await this.login({
        navigation: navigation,
        userId: userId,
        password: password,
        isAutoLogin: true,
      }))
    ) {
      return;
    }
    navigation.replace(MyRoutes.Login);
  }

  public async login({
    navigation,
    serverAddress,
    userId,
    password,
    isAutoLogin = false,
  }: {
    navigation: StackNavigationProp<MyRouteProps>;
    serverAddress?: string;
    userId: string;
    password: string;
    isAutoLogin?: boolean;
  }): Promise<boolean> {
    MyServiceUtils.serverAddress =
      serverAddress ??
      (await MyStorageUtils.getData(MyKeys.CurrentServerAddress));
    const response = await MyUserService.login({
      userId: userId,
      password: password,
    });
    if (response.isSuccessful) {
      if (!isAutoLogin) {
        await MyStorageUtils.storeData(
          MyKeys.CurrentServerAddress,
          serverAddress!,
        );
        await MyStorageUtils.storeData(MyKeys.CurrentUserId, userId);
        await MyStorageUtils.storeData(MyKeys.CurrentUserPassword, password);
      }
      MyServiceUtils.token = response.data;
      const isTestMode = false;
      if (isTestMode) {
        navigation.replace(MyRoutes.Test);
      } else {
        navigation.replace(MyRoutes.Home, {
          initialRoute: MyNavigationBarRoutes.Dashboard,
        });
      }
      return true;
    }
    return false;
  }

  public async logout({
    navigation,
  }: {
    navigation: StackNavigationProp<MyRouteProps>;
  }): Promise<void> {
    await MyUserService.logout();
    await MyStorageUtils.storeData(MyKeys.CurrentServerAddress, '');
    await MyStorageUtils.storeData(MyKeys.CurrentUserId, '');
    await MyStorageUtils.storeData(MyKeys.CurrentUserPassword, '');
    navigation.replace(MyRoutes.Login);
  }
}

export default MyAuthenticationUtils.getInstance();
