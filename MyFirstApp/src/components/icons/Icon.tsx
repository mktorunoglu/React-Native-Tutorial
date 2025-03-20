import { Icon } from 'react-native-paper';

const MyIcon: React.FC<{
    icon: string;
    color?: string;
    size?: number;
}> = ({
    icon,
    color,
    size = 24,
}) => {
        return <Icon
            source={icon}
            color={color}
            size={size} />;
    };

export default MyIcon;
