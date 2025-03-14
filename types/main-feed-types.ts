import {ImageSourcePropType} from 'react-native';

export type UserPostType = {
  id: number;
  username: string;
  profileImage: ImageSourcePropType;
  postImage: ImageSourcePropType;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
};

export type MainFeedProps = {
  posts: UserPostType[];
};
