import { Icon } from "react-native-paper";
import { MyIcons } from "../../enums/Icons";

const MyIcon: React.FC<{
    icon: MyIcons;
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
