import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

export type ProfileImageProps = {
  profileImage: ImageSourcePropType;
  imageSize?: number;
  overrideStyle?: StyleProp<ViewStyle>;
};
