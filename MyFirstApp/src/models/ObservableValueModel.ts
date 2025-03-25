import { makeAutoObservable } from "mobx";

class MyObservableValueModel<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
        makeAutoObservable(this);
    };

    get value(): T {
        return this._value;
    };

    setValue = (value: T) => this._value = value;
};

export default MyObservableValueModel;
