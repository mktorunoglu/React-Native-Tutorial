import {ReactNode} from 'react';
import MyModalDataModel from '../models/ModalDataModel';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyKeyboardUtils from './KeyboardUtils';

class MyModalUtils {
  private static instance: MyModalUtils;

  private constructor() {}

  public static getInstance(): MyModalUtils {
    if (!MyModalUtils.instance) {
      MyModalUtils.instance = new MyModalUtils();
    }
    return MyModalUtils.instance;
  }

  public modalModelList = new MyObservableValueModel<MyModalDataModel[]>([]);
  public modalModelCounter = 0;
  public isProgressModalVisible = new MyObservableValueModel(false);

  public showModal({
    modal,
    isDismissible = true,
  }: {
    modal: ReactNode;
    isDismissible?: boolean;
  }) {
    MyKeyboardUtils.closeKeyboard();
    this.modalModelList.setValue([
      ...this.modalModelList.value,
      new MyModalDataModel({
        id: ++this.modalModelCounter,
        modal: modal,
        isDismissible: isDismissible,
      }),
    ]);
  }

  public hideLastModal() {
    if (this.modalModelList.value.length > 0) {
      const modalModelList = [...this.modalModelList.value];
      modalModelList.pop();
      this.modalModelList.setValue(modalModelList);
    }
  }

  public hideLastModalIfDismissible() {
    if (
      this.modalModelList.value.length > 0 &&
      this.modalModelList.value[this.modalModelList.value.length - 1]
        .isDismissible
    ) {
      this.hideLastModal();
    }
  }

  public showProgressModal() {
    MyKeyboardUtils.closeKeyboard();
    this.isProgressModalVisible.setValue(true);
  }

  public hideProgressModal() {
    if (this.isProgressModalVisible.value) {
      this.isProgressModalVisible.setValue(false);
    }
  }
}

export default MyModalUtils.getInstance();
