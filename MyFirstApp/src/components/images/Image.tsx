import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

const MyImage: React.FC<{
    url?: string;
    path?: ImageSourcePropType;
    width?: number;
    height?: number;
}> = ({
    url,
    path,
    height,
    width,
}) => {
        return <Image
            source={
                url != null ? { uri: url } : path
            }
            style={[{
                height,
                width,
            }]}
            resizeMode="cover"
        />;
    };

export default MyImage;
