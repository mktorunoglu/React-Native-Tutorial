import {ReactNode} from 'react';
import {TouchableRipple} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';

const MyRawButton = ({
  color = MyColors.Black,
  onPress,
  children,
}: {
  color?: string;
  onPress?: () => void;
  children?: ReactNode;
}) => (
  <TouchableRipple
    rippleColor={MyColorUtils.getColorWithOpacity(color, 0.2)}
    onPress={onPress}>
    {children}
  </TouchableRipple>
);

export default MyRawButton;
