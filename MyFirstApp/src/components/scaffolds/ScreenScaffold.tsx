import {ReactNode} from 'react';
import {MyColors} from '../../enums/Colors';
import MyStatusBar from '../bars/StatusBar';
import MyKeyboardAvoidingView from '../views/KeyboardAvoidingView';
import MySafeAreaView from '../views/SafeAreaView';
import MyView from '../views/View';

const MyScreenScaffold = ({children}: {children?: ReactNode}) => (
  <MyView isExpanded backgroundColor={MyColors.White}>
    <MySafeAreaView>
      <MyStatusBar isContentDark />
      <MyKeyboardAvoidingView>{children}</MyKeyboardAvoidingView>
    </MySafeAreaView>
  </MyView>
);

export default MyScreenScaffold;
