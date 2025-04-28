import {ReactNode} from 'react';
import {Card} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';

const MyCard = ({
  onPress,
  children,
}: {
  onPress?: () => void;
  children: ReactNode;
}) => {
  return (
    <Card
      mode="outlined"
      onPress={onPress}
      style={{
        borderRadius: 10,
        borderColor: MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.35),
      }}>
      {children}
    </Card>
  );
};

export default MyCard;
