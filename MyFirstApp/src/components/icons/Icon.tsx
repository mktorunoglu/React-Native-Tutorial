import {Icon} from 'react-native-paper';
import {MyIcons} from '../../enums/Icons';

const MyIcon = ({
  icon,
  color,
  size = 24,
}: {
  icon: MyIcons;
  color?: string;
  size?: number;
}) => <Icon source={icon} color={color} size={size} />;

export default MyIcon;
