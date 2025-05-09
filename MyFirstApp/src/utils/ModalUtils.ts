import {ReactNode} from 'react';
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

  public modal = new MyObservableValueModel<ReactNode | null>(null);
  public isModalVisible = new MyObservableValueModel(false);
  public isModalDismissible = true;

  public showModal({
    modal,
    isDismissible = true,
  }: {
    modal: ReactNode;
    isDismissible?: boolean;
  }) {
    MyKeyboardUtils.closeKeyboard();
    this.modal.setValue(modal);
    this.isModalDismissible = isDismissible;
    this.isModalVisible.setValue(true);
  }

  public hideModal() {
    if (this.isModalVisible.value) {
      this.isModalVisible.setValue(false);
    }
  }
}

export default MyModalUtils.getInstance();
