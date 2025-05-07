import {MyFontWeights} from '../../enums/FontWeights';
import {MyIcons} from '../../enums/Icons';
import MyDivider from '../dividers/Divider';
import MyView from '../views/View';
import MyButton from './Button';

const MyModalSelectionButton = ({
  isSelected,
  icon,
  text,
  color,
  onPress,
}: {
  isSelected?: boolean;
  icon?: MyIcons;
  text: string;
  color?: string;
  onPress?: () => void;
}) => {
  return (
    <MyView isColumn>
      <MyDivider />
      <MyButton
        isTextButton
        borderRadius={0}
        foregroundColor={color}
        paddingVertical={5}
        icon={
          isSelected == null
            ? icon
            : isSelected
              ? MyIcons.RadioboxMarked
              : MyIcons.RadioboxBlank
        }
        text={text}
        textFontWeight={MyFontWeights.Normal}
        onPress={isSelected ? undefined : onPress}
      />
    </MyView>
  );
};

export default MyModalSelectionButton;
