import {Image, View} from 'react-native';
import styles from './styles';
import {ProfileImageProps} from '../../types/profile-image-props';

function ProfileImage({
  profileImage,
  overrideStyle,
  imageSize = 65,
}: ProfileImageProps) {
  return (
    <View style={[styles.profileImageBorder, overrideStyle]}>
      <Image
        source={profileImage}
        style={{width: imageSize, height: imageSize}}
      />
    </View>
  );
}

export default ProfileImage;
