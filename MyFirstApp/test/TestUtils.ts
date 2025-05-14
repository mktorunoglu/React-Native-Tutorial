class MyTestUtils {
  private static instance: MyTestUtils;

  private constructor() {}

  public static getInstance(): MyTestUtils {
    if (!MyTestUtils.instance) {
      MyTestUtils.instance = new MyTestUtils();
    }
    return MyTestUtils.instance;
  }

  public isTestMode = false;
}

export default MyTestUtils.getInstance();
