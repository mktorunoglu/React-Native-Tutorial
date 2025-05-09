import {observer} from 'mobx-react-lite';
import {MyColors} from '../../enums/Colors';
import {MyFontWeights} from '../../enums/FontWeights';
import {MySizes} from '../../enums/Sizes';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRawButton from '../buttons/RawButton';
import MySwitchButton from '../buttons/SwitchButton';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MySwitchTile = ({
  text,
  value,
  onChange,
}: {
  text: string;
  value: MyObservableValueModel<boolean>;
  onChange?: () => void;
}) => {
  const SwitchButton_ = observer(() => (
    <MySwitchButton
      value={value.value}
      onChange={value_ => {
        value.setValue(value_);
        if (onChange != null) {
          onChange();
        }
      }}
    />
  ));
  return (
    <MyRawButton onPress={() => value.setValue(!value.value)}>
      <MyView isRow isCenterItems paddingVertical={10}>
        <SwitchButton_ />
        <MyView width={10} />
        <MyView width={MySizes.Auto} isExpanded>
          <MyText
            text={text}
            fontWeight={MyFontWeights.Bold}
            color={MyColors.Grey}
          />
        </MyView>
      </MyView>
    </MyRawButton>
  );
};

export default MySwitchTile;
