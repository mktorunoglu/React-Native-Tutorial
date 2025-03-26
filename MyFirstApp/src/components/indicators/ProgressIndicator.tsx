import { ActivityIndicator } from "react-native-paper";
import { MyColors } from "../../enums/Colors";

const MyProgressIndicator: React.FC<{
    color?: MyColors,
    size?: number,
}> = ({
    color = MyColors.Theme,
    size = 40,
}) => {
        return <ActivityIndicator
            color={color}
            size={size} />;
    };

export default MyProgressIndicator;
