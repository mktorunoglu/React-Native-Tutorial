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
  observableValue,
}: {
  text: string;
  observableValue: MyObservableValueModel<boolean>;
}) => {
  const SwitchButton_ = observer(() => (
    <MySwitchButton
      value={observableValue.value}
      onChange={value => observableValue.setValue(value)}
    />
  ));
  return (
    <MyRawButton
      onPress={() => observableValue.setValue(!observableValue.value)}>
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
