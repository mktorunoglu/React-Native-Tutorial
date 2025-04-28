import AsyncStorage from '@react-native-async-storage/async-storage';

class MyStorageUtils {
  private static instance: MyStorageUtils;

  private constructor() {}

  public static getInstance(): MyStorageUtils {
    if (!MyStorageUtils.instance) {
      MyStorageUtils.instance = new MyStorageUtils();
    }
    return MyStorageUtils.instance;
  }

  public async storeData(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  }

  public async getData(key: string): Promise<string | null> {
    return await AsyncStorage.getItem(key);
  }
}

export default MyStorageUtils.getInstance();
