import {observer} from 'mobx-react-lite';
import {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {MyPlatforms} from '../../enums/Platforms';
import MyKeyboardUtils from '../../utils/KeyboardUtils';

const MyKeyboardAvoidingView = ({children}: {children?: ReactNode}) => {
  const KeyboardAvoidingView_ = observer(() => (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={
        MyKeyboardUtils.isKeyboardVisible.value
          ? Platform.OS == MyPlatforms.IOS
            ? -50
            : -50
          : Platform.OS == MyPlatforms.IOS
            ? 0
            : 0
      }
      style={{flex: 1}}>
      {children}
    </KeyboardAvoidingView>
  ));
  return <KeyboardAvoidingView_ />;
};

export default MyKeyboardAvoidingView;
