import {MyApiUrls} from '../enums/ApiUrls';

class MyServiceUtils {
  private static instance: MyServiceUtils;

  private constructor() {}

  public static getInstance(): MyServiceUtils {
    if (!MyServiceUtils.instance) {
      MyServiceUtils.instance = new MyServiceUtils();
    }
    return MyServiceUtils.instance;
  }

  public serverAddress?: string | null;
  public token?: string | null;

  private getApiUrl(apiUrl: string): string {
    return this.serverAddress + apiUrl;
  }

  public getFileApiUrl(): string {
    return this.getApiUrl(MyApiUrls.FileApi);
  }

  public getGroupApiUrl(): string {
    return this.getApiUrl(MyApiUrls.GroupApi);
  }

  public getUserApiUrl(): string {
    return this.getApiUrl(MyApiUrls.UserApi);
  }
}

export default MyServiceUtils.getInstance();
