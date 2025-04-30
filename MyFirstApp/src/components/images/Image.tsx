import {DimensionValue, Image, ImageSourcePropType} from 'react-native';
import {MyFills} from '../../enums/Fills';

const MyImage = ({
  url,
  path,
  height,
  width,
  resizeMode = MyFills.Contain,
}: {
  url?: string;
  path?: ImageSourcePropType;
  height?: DimensionValue;
  width?: DimensionValue;
  resizeMode?: MyFills;
}) => {
  return (
    <Image
      source={url != null ? {uri: url} : path}
      style={{
        height,
        width,
      }}
      resizeMode={resizeMode}
    />
  );
};

export default MyImage;
