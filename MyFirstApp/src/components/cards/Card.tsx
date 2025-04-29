import {ReactNode} from 'react';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';
import MyView from '../views/View';

const MyCard = ({children}: {children: ReactNode}) => {
  return (
    <MyView
      borderRadius={10}
      borderWidth={1}
      borderColor={MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.3)}
      backgroundColor={MyColors.White}>
      {children}
    </MyView>
  );
};

export default MyCard;
