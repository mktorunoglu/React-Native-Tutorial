import {Text} from 'react-native-paper';
import {MyFontWeights} from '../../enums/FontWeights';
import {MyTextAligns} from '../../enums/TextAligns';
import {MyTextOverflows} from '../../enums/TextOverflows';

const MyText = ({
  text,
  color,
  fontSize,
  fontWeight,
  textAlign,
  maxLines,
  textOverflow,
}: {
  text?: string;
  color?: string;
  fontSize?: number;
  fontWeight?: MyFontWeights;
  textAlign?: MyTextAligns;
  maxLines?: number;
  textOverflow?: MyTextOverflows;
}) => (
  <Text
    numberOfLines={maxLines}
    ellipsizeMode={textOverflow}
    style={{
      color,
      fontSize,
      fontWeight,
      textAlign,
    }}>
    {text}
  </Text>
);

export default MyText;
