import {MyModalKeys} from '../enums/ModalKeys';
import MyModalDataModel from '../models/ModalDataModel';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyKeyboardUtils from './KeyboardUtils';

class MyTestModalUtils {
  private static instance: MyTestModalUtils;

  private constructor() {}

  public static getInstance(): MyTestModalUtils {
    if (!MyTestModalUtils.instance) {
      MyTestModalUtils.instance = new MyTestModalUtils();
    }
    return MyTestModalUtils.instance;
  }

  public modalModelList = new MyObservableValueModel<MyModalDataModel[]>([]);

  public showModal({modalModel}: {modalModel: MyModalDataModel}) {
    MyKeyboardUtils.closeKeyboard();
    this.modalModelList.setValue([...this.modalModelList.value, modalModel]);
  }

  public hideModalByKey({modalKey}: {modalKey: MyModalKeys}) {
    this.modalModelList.setValue(
      this.modalModelList.value.filter(item => item.key != modalKey),
    );
  }
}

export default MyTestModalUtils.getInstance();
