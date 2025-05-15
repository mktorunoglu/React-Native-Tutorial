import {ReactNode} from 'react';
import {Dimensions} from 'react-native';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyStatusBar from '../bars/StatusBar';
import MyRawButton from '../buttons/RawButton';
import MyKeyboardAvoidingView from '../views/KeyboardAvoidingView';
import MySafeAreaView from '../views/SafeAreaView';
import MyView from '../views/View';

const MyModalScaffold = ({
  isDismissible = true,
  children,
}: {
  isDismissible?: boolean;
  children?: ReactNode;
}) => {
  const {height} = Dimensions.get('window');
  return (
    <MyView
      isExpanded
      backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Black, 0.5)}>
      <MySafeAreaView>
        <MyStatusBar />
        <MyKeyboardAvoidingView>
          <MyView zIndex={0}>
            <MyRawButton
              color={MyColors.Transparent}
              onPress={
                isDismissible ? () => MyModalUtils.hideModal() : undefined
              }>
              <MyView height={height} />
            </MyRawButton>
          </MyView>
          {children}
        </MyKeyboardAvoidingView>
      </MySafeAreaView>
    </MyView>
  );
};

export default MyModalScaffold;
