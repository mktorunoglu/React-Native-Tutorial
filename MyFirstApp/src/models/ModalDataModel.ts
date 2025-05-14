import {ReactNode} from 'react';
import {MyModalKeys} from '../enums/ModalKeys';

class MyModalDataModel {
  key: MyModalKeys;
  modal: ReactNode;
  isDismissible: boolean;

  constructor({
    key,
    modal,
    isDismissible = true,
  }: {
    key: MyModalKeys;
    modal: ReactNode;
    isDismissible?: boolean;
  }) {
    this.key = key;
    this.modal = modal;
    this.isDismissible = isDismissible;
  }
}

export default MyModalDataModel;
