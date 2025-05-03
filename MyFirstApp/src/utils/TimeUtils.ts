import NTPSync from '@ruanitto/react-native-ntp-sync';

class MyTimeUtils {
  private static instance: MyTimeUtils;

  private constructor() {
    this.ntp = new NTPSync();
  }

  public static getInstance(): MyTimeUtils {
    if (!MyTimeUtils.instance) {
      MyTimeUtils.instance = new MyTimeUtils();
    }
    return MyTimeUtils.instance;
  }

  private ntp: NTPSync;

  public async getTime(): Promise<number> {
    await this.ntp.syncTime();
    return this.ntp.getTime();
  }
}

export default MyTimeUtils.getInstance();
