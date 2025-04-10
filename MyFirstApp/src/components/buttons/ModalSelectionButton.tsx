import { MyIcons } from "../../enums/Icons";
import MyDivider from "../dividers/Divider";
import MyView from "../views/View";
import MyButton from "./Button";

const MyModalSelectionButton = ({
    isSelected,
    icon,
    text,
    onPress,
}: {
    isSelected?: boolean,
    icon?: MyIcons,
    text: string,
    onPress: () => void,
}) => {
    return <MyView
        isColumn={true}>
        <MyDivider />
        <MyButton
            isTextButton={true}
            borderRadius={0}
            paddingVertical={5}
            icon={isSelected == null ? icon : (isSelected ? MyIcons.RadioboxMarked : MyIcons.RadioboxBlank)}
            text={text}
            onPress={isSelected ? () => { } : onPress} />
    </MyView>;
};

export default MyModalSelectionButton;
