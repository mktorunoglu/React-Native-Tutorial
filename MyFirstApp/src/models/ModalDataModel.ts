import {ReactNode} from 'react';

class MyModalDataModel {
  id: number;
  modal: ReactNode;
  isDismissible: boolean;

  constructor({
    id,
    modal,
    isDismissible = true,
  }: {
    id: number;
    modal: ReactNode;
    isDismissible?: boolean;
  }) {
    this.id = id;
    this.modal = modal;
    this.isDismissible = isDismissible;
  }
}

export default MyModalDataModel;
