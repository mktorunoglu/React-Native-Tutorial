import {MyKeys} from '../enums/Keys';
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
    navigateToLoginScreen,
    navigateToHomeScreen,
    navigateToTestScreen,
  }: {
    navigateToLoginScreen: () => void;
    navigateToHomeScreen: () => void;
    navigateToTestScreen: () => void;
  }) {
    const userId = (await MyStorageUtils.getData(MyKeys.CurrentUserId)) ?? '';
    const password =
      (await MyStorageUtils.getData(MyKeys.CurrentUserPassword)) ?? '';
    if (
      userId !== '' &&
      password !== '' &&
      (await this.login({
        userId: userId,
        password: password,
        navigateToHomeScreen: navigateToHomeScreen,
        isAutoLogin: true,
      }))
    ) {
      return;
    }
    navigateToLoginScreen();
  }

  public async login({
    serverAddress,
    userId,
    password,
    navigateToHomeScreen,
    isAutoLogin = false,
  }: {
    serverAddress?: string;
    userId: string;
    password: string;
    navigateToHomeScreen: () => void;
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
      navigateToHomeScreen();
      return true;
    }
    return false;
  }

  public async logout({
    navigateToLoginScreen,
  }: {
    navigateToLoginScreen: () => void;
  }): Promise<void> {
    await MyUserService.logout();
    await MyStorageUtils.storeData(MyKeys.CurrentServerAddress, '');
    await MyStorageUtils.storeData(MyKeys.CurrentUserId, '');
    await MyStorageUtils.storeData(MyKeys.CurrentUserPassword, '');
    navigateToLoginScreen();
  }
}

export default MyAuthenticationUtils.getInstance();
