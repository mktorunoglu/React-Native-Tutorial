import {makeAutoObservable} from 'mobx';

class MyObservableValueModel<T> {
  public value: T;

  constructor(value: T) {
    this.value = value;
    makeAutoObservable(this);
  }
}

export default MyObservableValueModel;
