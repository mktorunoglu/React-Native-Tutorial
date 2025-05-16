import {MyPermissions} from '../enums/Permissions';
import MyLocalizationUtils from './LocalizationUtils';

class MyPermissionUtils {
  private static instance: MyPermissionUtils;

  private constructor() {}

  public static getInstance(): MyPermissionUtils {
    if (!MyPermissionUtils.instance) {
      MyPermissionUtils.instance = new MyPermissionUtils();
    }
    return MyPermissionUtils.instance;
  }

  public getPermissionText({
    permission,
  }: {
    permission: string | MyPermissions;
  }): string | undefined {
    return {
      [MyPermissions.ReadOnly]: MyLocalizationUtils.getLocalizedReadOnlyText(),
      [MyPermissions.ReadWrite]:
        MyLocalizationUtils.getLocalizedReadWriteText(),
      [MyPermissions.WriteOnly]:
        MyLocalizationUtils.getLocalizedWriteOnlyText(),
    }[permission];
  }
}

export default MyPermissionUtils.getInstance();
