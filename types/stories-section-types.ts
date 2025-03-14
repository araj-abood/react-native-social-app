import {ImageSourcePropType} from 'react-native';

export type userStoryData = {
  id: number;
  username: string;
  profileImage: ImageSourcePropType;
};

export type StoriesSectionProps = {
  data: userStoryData[];
};
