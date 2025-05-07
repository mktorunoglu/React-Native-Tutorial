import {MyKeys} from '../enums/Keys';
import {MySortingTypes} from '../enums/SortingTypes';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyLocalizationUtils from './LocalizationUtils';
import MyStorageUtils from './StorageUtils';

class MySortingUtils {
  private static instance: MySortingUtils;

  private constructor() {}

  public static getInstance(): MySortingUtils {
    if (!MySortingUtils.instance) {
      MySortingUtils.instance = new MySortingUtils();
    }
    return MySortingUtils.instance;
  }

  public sortingType = new MyObservableValueModel(
    MySortingTypes.AlphabeticalAscending,
  );

  public async initialize() {
    const sortingType = await MyStorageUtils.getData(MyKeys.SortingType);
    if (sortingType != null) {
      this.sortingType.setValue(sortingType as MySortingTypes);
    }
  }

  public async setSortingType(sortingType: MySortingTypes) {
    await MyStorageUtils.storeData(MyKeys.SortingType, sortingType);
    this.sortingType.setValue(sortingType);
  }

  public compareStrings(a?: string, b?: string): number {
    return (a ?? '').localeCompare(b ?? '', MyLocalizationUtils.localization);
  }

  public compareNumbers(a?: number, b?: number): number {
    return (a ?? 0) - (b ?? 0);
  }
}

export default MySortingUtils.getInstance();
