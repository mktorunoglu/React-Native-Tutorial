import {MyColors} from '../../enums/Colors';
import MyRawButton from '../buttons/RawButton';
import MyDivider from '../dividers/Divider';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyDataPickerButton = ({
  labelText,
  labelTextOnSelect,
  valueText,
  onPress,
}: {
  labelText: string;
  labelTextOnSelect: string;
  valueText?: string;
  onPress: () => void;
}) => {
  const isSelected = valueText != null;
  return (
    <MyRawButton onPress={onPress}>
      <MyView isColumn>
        <MyView paddingVertical={isSelected ? 10 : 20} paddingHorizontal={20}>
          <MyText
            text={isSelected ? labelTextOnSelect : labelText}
            color={MyColors.Theme}
          />
          {isSelected && <MyText text={valueText} />}
        </MyView>
        <MyDivider />
      </MyView>
    </MyRawButton>
  );
};

export default MyDataPickerButton;
