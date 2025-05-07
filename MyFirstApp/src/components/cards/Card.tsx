import {ReactNode} from 'react';
import {DimensionValue} from 'react-native';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';
import MyView from '../views/View';

const MyCard = ({
  padding,
  paddingVertical,
  paddingHorizontal,
  children,
}: {
  padding?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  children?: ReactNode;
}) => (
  <MyView
    borderRadius={10}
    borderWidth={1}
    borderColor={MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.3)}
    backgroundColor={MyColors.White}
    padding={padding}
    paddingVertical={paddingVertical}
    paddingHorizontal={paddingHorizontal}>
    {children}
  </MyView>
);

export default MyCard;
