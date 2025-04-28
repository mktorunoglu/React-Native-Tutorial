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

  public convertJsonToModelList<T>({
    json,
    model,
  }: {
    json: any[];
    model: new (item: any) => T;
  }): T[] {
    return json.map(item => new model(item));
  }

  public convertNumberToSizeText({number}: {number: number}) {
    return filesize(number, {
      standard: 'jedec',
      round: 1,
    });
  }
}

export default MyConverterUtils.getInstance();
