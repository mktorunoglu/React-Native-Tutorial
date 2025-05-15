import {DimensionValue} from 'react-native';
import {MyTextAligns} from '../../enums/TextAligns';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyAlertBody = ({
  paddingHorizontal,
  paddingVertical,
  text,
}: {
  paddingHorizontal?: DimensionValue;
  paddingVertical?: DimensionValue;
  text: string;
}) => (
  <MyView
    isExpanded
    isCenterItems
    paddingHorizontal={paddingHorizontal}
    paddingVertical={paddingVertical}>
    <MyText text={text} textAlign={MyTextAligns.Center} />
  </MyView>
);

export default MyAlertBody;
