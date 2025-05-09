import {MyColors} from '../../enums/Colors';
import {MySizes} from '../../enums/Sizes';
import MyDivider from '../dividers/Divider';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyModalDataTile = ({
  text,
  value,
  isLastItem = false,
}: {
  text: string;
  value: string;
  isLastItem?: boolean;
}) => (
  <MyView isColumn paddingHorizontal={20}>
    <MyView isRow paddingVertical={20}>
      <MyView isExpanded width={MySizes.Auto}>
        <MyText text={text} color={MyColors.Grey} />
      </MyView>
      <MyView width={10} />
      <MyText text={value} />
    </MyView>
    {!isLastItem && <MyDivider />}
  </MyView>
);

export default MyModalDataTile;
