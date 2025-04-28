class MyTimerUtils {
  private static instance: MyTimerUtils;

  private constructor() {}

  public static getInstance(): MyTimerUtils {
    if (!MyTimerUtils.instance) {
      MyTimerUtils.instance = new MyTimerUtils();
    }
    return MyTimerUtils.instance;
  }

  public setTimer({
    durationMilliseconds,
    onFinished,
  }: {
    durationMilliseconds: number;
    onFinished: () => void;
  }) {
    setTimeout(onFinished, durationMilliseconds);
  }
}

export default MyTimerUtils.getInstance();
