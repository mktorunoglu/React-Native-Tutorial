import BlobUtil from 'react-native-blob-util';

class MyFileUtils {
  private static instance: MyFileUtils;

  private constructor() {}

  public static getInstance(): MyFileUtils {
    if (!MyFileUtils.instance) {
      MyFileUtils.instance = new MyFileUtils();
    }
    return MyFileUtils.instance;
  }

  public getApplicationCacheDirectory(): string {
    return BlobUtil.fs.dirs.CacheDir;
  }

  public async getIsFilePathExists(filePath: string): Promise<boolean> {
    return await BlobUtil.fs.exists(filePath);
  }
}

export default MyFileUtils.getInstance();
