import {ActivityIndicator} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';

const MyProgressIndicator = ({
  color = MyColors.Theme,
  size = 40,
}: {
  color?: string;
  size?: number;
}) => {
  return <ActivityIndicator color={color} size={size} />;
};

export default MyProgressIndicator;
