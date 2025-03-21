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
        return <MyTooltip
            text={tooltip}>
            <IconButton
                icon={icon}
                size={size}
                onPress={onPress} />
        </MyTooltip>;
    };

export default MyIconButton;
