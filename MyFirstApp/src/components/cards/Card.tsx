import {ReactNode} from 'react';
import {DimensionValue} from 'react-native';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';
import MyView from '../views/View';

const MyCard = ({
  padding,
  children,
}: {
  padding?: DimensionValue;
  children: ReactNode;
}) => {
  return (
    <MyView
      borderRadius={10}
      borderWidth={1}
      borderColor={MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.3)}
      backgroundColor={MyColors.White}
      padding={padding}>
      {children}
    </MyView>
  );
};

export default MyCard;
