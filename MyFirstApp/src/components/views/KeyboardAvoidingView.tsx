import {ReactNode} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {MyPlatforms} from '../../enums/Platforms';

const MyKeyboardAvoidingView = ({children}: {children?: ReactNode}) => (
  <KeyboardAvoidingView
    behavior="padding"
    keyboardVerticalOffset={Platform.OS == MyPlatforms.IOS ? -50 : -50} // TEST IOS keyboard açıkken 0 kapalıyken -50
    style={{flex: 1}}>
    {children}
  </KeyboardAvoidingView>
);

export default MyKeyboardAvoidingView;
