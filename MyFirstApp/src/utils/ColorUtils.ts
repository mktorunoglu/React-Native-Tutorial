class MyColorUtils {
  private static instance: MyColorUtils;

  private constructor() {}

  public static getInstance(): MyColorUtils {
    if (!MyColorUtils.instance) {
      MyColorUtils.instance = new MyColorUtils();
    }
    return MyColorUtils.instance;
  }

  public getColorWithOpacity(color: string, opacity: number): string {
    if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      return (
        'rgba(' +
        parseInt(hex.substring(0, 2), 16) +
        ',' +
        parseInt(hex.substring(2, 4), 16) +
        ',' +
        parseInt(hex.substring(4, 6), 16) +
        ',' +
        opacity +
        ')'
      );
    }
    return color;
  }
}

export default MyColorUtils.getInstance();
