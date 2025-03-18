import React from 'react';
import { DimensionValue, Image, ImageSourcePropType } from 'react-native';
import { MyFills } from '../../enums/Fills';

const MyImage: React.FC<{
    url?: string;
    path?: ImageSourcePropType;
    width?: DimensionValue;
    height?: DimensionValue;
    resizeMode?: MyFills;
}> = ({
    url,
    path,
    height,
    width,
    resizeMode = MyFills.Contain,
}) => {
        return <Image
            source={
                url != null ? { uri: url } : path
            }
            style={[{
                height,
                width,
            }]}
            resizeMode={resizeMode} />;
    };

export default MyImage;
