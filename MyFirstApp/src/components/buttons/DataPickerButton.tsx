import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MySizes} from '../../enums/Sizes';
import MyRawButton from '../buttons/RawButton';
import MyDivider from '../dividers/Divider';
import MyIcon from '../icons/Icon';
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
  valueText: string;
  onPress: () => void;
}) => {
  const isSelected = valueText.trim() != '';
  return (
    <MyRawButton onPress={onPress}>
      <MyView isColumn>
        <MyView paddingVertical={isSelected ? 10 : 20} paddingHorizontal={20}>
          <MyView isRow isCenterItems>
            <MyView isColumn isExpanded width={MySizes.Auto}>
              <MyText
                text={isSelected ? labelTextOnSelect : labelText}
                color={MyColors.Theme}
              />
              {isSelected && <MyText text={valueText} />}
            </MyView>
            <MyView width={20} />
            <MyIcon icon={MyIcons.NavigateRight} color={MyColors.Theme} />
          </MyView>
        </MyView>
        <MyDivider />
      </MyView>
    </MyRawButton>
  );
};

export default MyDataPickerButton;
