import {Divider} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';

const MyDivider = ({
  color = MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.3),
  thickness = 1,
}: {
  color?: string;
  thickness?: number;
}) => <Divider bold style={{backgroundColor: color, height: thickness}} />;

export default MyDivider;
