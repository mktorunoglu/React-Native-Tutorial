import { IconButton } from 'react-native-paper';
import MyTooltip from '../tooltips/Tooltip';

const MyIconButton: React.FC<{
    icon: string;
    tooltip?: string;
    size?: number;
    onPress?: () => void;
}> = ({
    icon,
    tooltip,
    size,
    onPress,
}) => {
        const iconButton = <IconButton
            icon={icon}
            size={size}
            onPress={onPress} />;
        if (tooltip == null) {
            return iconButton;
        }
        return <MyTooltip
            text={tooltip}>
            {iconButton}
        </MyTooltip>;
    };

export default MyIconButton;
