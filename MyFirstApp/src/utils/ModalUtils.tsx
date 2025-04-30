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
    this.modal.setValue(modal);
    this.isModalVisible.setValue(true);
  }

  public showProgressModal() {
    this.modal.setValue(<MyProgressModal />);
    this.isModalVisible.setValue(true);
  }

  public hideModal() {
    this.isModalVisible.setValue(false);
  }
}

export default MyModalUtils.getInstance();
