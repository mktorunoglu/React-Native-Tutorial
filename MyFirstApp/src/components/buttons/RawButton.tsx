import {ReactNode} from 'react';
import {TouchableRipple} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';

const MyRawButton = ({
  onPress,
  color = MyColors.Black,
  children,
}: {
  onPress?: () => void;
  color?: string;
  children?: ReactNode;
}) => (
  <TouchableRipple
    onPress={onPress}
    rippleColor={MyColorUtils.getColorWithOpacity(color, 0.2)}>
    {children}
  </TouchableRipple>
);

export default MyRawButton;
