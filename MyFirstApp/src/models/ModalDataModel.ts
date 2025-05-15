import {ReactNode} from 'react';

class MyModalDataModel {
  modal: ReactNode;
  isDismissible: boolean;

  constructor({
    modal,
    isDismissible = true,
  }: {
    modal: ReactNode;
    isDismissible?: boolean;
  }) {
    this.modal = modal;
    this.isDismissible = isDismissible;
  }
}

export default MyModalDataModel;
