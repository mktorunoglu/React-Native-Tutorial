import { MyIcons } from "../../enums/Icons";
import MyDivider from "../dividers/Divider";
import MyView from "../views/View";
import MyButton from "./Button";

const MyModalSelectionButton: React.FC<{
    isSelected: boolean,
    text: string;
    onPress: () => void;
}> = ({
    isSelected,
    text,
    onPress,
}) => {
        return <MyView
            isColumn={true}>
            <MyDivider />
            <MyButton
                isTextButton={true}
                borderRadius={0}
                paddingVertical={5}
                icon={isSelected ? MyIcons.RadioboxMarked : MyIcons.RadioboxBlank}
                text={text}
                onPress={isSelected ? () => { } : onPress} />
        </MyView>;
    };

export default MyModalSelectionButton;
