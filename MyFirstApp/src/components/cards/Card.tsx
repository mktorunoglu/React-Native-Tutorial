import {ReactNode} from 'react';
import {DimensionValue} from 'react-native';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';
import MyView from '../views/View';

const MyCard = ({
  margin,
  marginVertical,
  marginHorizontal,
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingLeft,
  paddingTop,
  paddingRight,
  paddingBottom,
  children,
}: {
  margin?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  marginLeft?: DimensionValue;
  marginTop?: DimensionValue;
  marginRight?: DimensionValue;
  marginBottom?: DimensionValue;
  padding?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingRight?: DimensionValue;
  paddingBottom?: DimensionValue;
  children?: ReactNode;
}) => (
  <MyView
    width="auto"
    borderRadius={10}
    borderWidth={1}
    borderColor={MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.3)}
    backgroundColor={MyColors.White}
    margin={margin}
    marginVertical={marginVertical}
    marginHorizontal={marginHorizontal}
    marginLeft={marginLeft}
    marginTop={marginTop}
    marginRight={marginRight}
    marginBottom={marginBottom}
    padding={padding}
    paddingVertical={paddingVertical}
    paddingHorizontal={paddingHorizontal}
    paddingLeft={paddingLeft}
    paddingTop={paddingTop}
    paddingRight={paddingRight}
    paddingBottom={paddingBottom}>
    {children}
  </MyView>
);

export default MyCard;
