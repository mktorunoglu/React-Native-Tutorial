import {ReactNode} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';

const MyPercentProgressIndicator = ({
  size,
  strokeWidth,
  percent,
  backgroundColor = MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2),
  tintColor = MyColors.Theme,
  children,
}: {
  size: number;
  strokeWidth: number;
  percent: number;
  backgroundColor?: string;
  tintColor?: string;
  children?: () => ReactNode;
}) => (
  <AnimatedCircularProgress
    size={size}
    width={strokeWidth}
    fill={percent}
    backgroundColor={backgroundColor}
    tintColor={tintColor}
    tintTransparency={false}
    rotation={0}>
    {children}
  </AnimatedCircularProgress>
);

export default MyPercentProgressIndicator;
