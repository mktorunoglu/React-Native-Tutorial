import {ReactElement} from 'react';
import MyProgressModal from '../components/modals/ProgressModal';
import MyObservableValueModel from '../models/ObservableValueModel';

class MyModalUtils {
  private static instance: MyModalUtils;

  private constructor() {}

  public static getInstance(): MyModalUtils {
    if (!MyModalUtils.instance) {
      MyModalUtils.instance = new MyModalUtils();
    }
    return MyModalUtils.instance;
  }

  public modal = new MyObservableValueModel<ReactElement | null>(null);
  public isModalVisible = new MyObservableValueModel(false);

  public showModal({modal}: {modal: ReactElement}) {
    this.modal.value = modal;
    this.isModalVisible.value = true;
  }

  public showProgressModal() {
    this.modal.value = <MyProgressModal />;
    this.isModalVisible.value = true;
  }

  public hideModal() {
    this.isModalVisible.value = false;
  }
}

export default MyModalUtils.getInstance();
