import {BackHandler} from 'react-native';
import MyKeyboardUtils from './KeyboardUtils';
import MyModalUtils from './ModalUtils';

class MyNavigationUtils {
  private static instance: MyNavigationUtils;

  private constructor() {}

  public static getInstance(): MyNavigationUtils {
    if (!MyNavigationUtils.instance) {
      MyNavigationUtils.instance = new MyNavigationUtils();
    }
    return MyNavigationUtils.instance;
  }

  public initialize() {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (MyKeyboardUtils.isKeyboardVisible.value) {
        MyKeyboardUtils.closeKeyboard();
        return true;
      }
      if (MyModalUtils.isProgressModalVisible.value) {
        return true;
      }
      if (MyModalUtils.modalModelList.value.length > 0) {
        MyModalUtils.hideLastModalIfDismissible();
        return true;
      }
      return false;
    });
  }
}

export default MyNavigationUtils.getInstance();
