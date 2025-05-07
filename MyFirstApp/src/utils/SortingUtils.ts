import {MyKeys} from '../enums/Keys';
import {MySortingTypes} from '../enums/SortingTypes';
import MyObservableValueModel from '../models/ObservableValueModel';
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
}

export default MySortingUtils.getInstance();
