import {Keyboard} from 'react-native';
import MyObservableValueModel from '../models/ObservableValueModel';

class MyKeyboardUtils {
  private static instance: MyKeyboardUtils;

  private constructor() {}

  public static getInstance(): MyKeyboardUtils {
    if (!MyKeyboardUtils.instance) {
      MyKeyboardUtils.instance = new MyKeyboardUtils();
    }
    return MyKeyboardUtils.instance;
  }

  public isKeyboardVisible = new MyObservableValueModel(false);

  public async initialize() {
    Keyboard.addListener('keyboardDidShow', () =>
      this.isKeyboardVisible.setValue(true),
    );
    Keyboard.addListener('keyboardDidHide', () =>
      this.isKeyboardVisible.setValue(false),
    );
  }
}

export default MyKeyboardUtils.getInstance();
