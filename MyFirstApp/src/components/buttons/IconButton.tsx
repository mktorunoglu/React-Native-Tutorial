import {IconButton} from 'react-native-paper';
import MyTooltip from '../tooltips/Tooltip';

const MyIconButton = ({
  icon,
  tooltip,
  size,
  onPress,
}: {
  icon: string;
  tooltip?: string;
  size?: number;
  onPress?: () => void;
}) => {
  const iconButton = <IconButton icon={icon} size={size} onPress={onPress} />;
  if (tooltip == null) {
    return iconButton;
  }
  return <MyTooltip text={tooltip}>{iconButton}</MyTooltip>;
};

export default MyIconButton;
