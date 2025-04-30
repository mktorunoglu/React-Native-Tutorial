import {makeAutoObservable} from 'mobx';

class MyObservableValueModel<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
    makeAutoObservable(this);
  }

  getValue() {
    return this.value;
  }

  setValue(value: T) {
    this.value = value;
  }
}

export default MyObservableValueModel;
