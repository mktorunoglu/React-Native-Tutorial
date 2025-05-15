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
      new MyModalDataModel({modal: modal, isDismissible: isDismissible}),
    ]);
  }

  public hideLastModal() {
    this.modalModelList.value.pop();
  }

  public hideLastModalIfDismissible() {
    if (
      this.modalModelList.value.length > 0 &&
      this.modalModelList.value[this.modalModelList.value.length - 1]
        .isDismissible
    ) {
      this.modalModelList.value.pop();
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
