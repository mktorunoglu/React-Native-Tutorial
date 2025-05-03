import {filesize} from 'filesize';

class MyConverterUtils {
  private static instance: MyConverterUtils;

  private constructor() {}

  public static getInstance(): MyConverterUtils {
    if (!MyConverterUtils.instance) {
      MyConverterUtils.instance = new MyConverterUtils();
    }
    return MyConverterUtils.instance;
  }

  public convertNumberToSizeText(number: number) {
    return filesize(number, {
      standard: 'jedec',
      round: 1,
    });
  }
}

export default MyConverterUtils.getInstance();
