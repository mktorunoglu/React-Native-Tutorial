import {BackHandler} from 'react-native';
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
      if (MyModalUtils.isModalVisible.value) {
        MyModalUtils.hideModal();
        return true;
      }
      return false;
    });
  }
}

export default MyNavigationUtils.getInstance();
