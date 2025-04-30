import {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import MyUserService from '../services/UserService';

// TEST
const MyTestComponent = () => {
  const [avatarPath, setAvatarPath] = useState<string | null>(null);

  useEffect(() => {
    const loadAvatar = async () => {
      const response = await MyUserService.getUserAvatar();
      if (response.isSuccessful) {
        setAvatarPath(response.data);
        return;
      }
      console.warn('Resim dosyası bulunamadı.');
    };
    loadAvatar();
  }, []);

  return (
    <View>
      {avatarPath ? (
        <Image
          source={{uri: 'file://' + avatarPath}}
          style={{width: 120, height: 120}}
        />
      ) : (
        <Text>Resim yükleniyor...</Text>
      )}
    </View>
  );
};

export default MyTestComponent;
