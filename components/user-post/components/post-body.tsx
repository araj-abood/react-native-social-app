import {Image, View} from 'react-native';
import {UserPostType} from '../../../types/main-feed-types';
import styles from '../styles';

function PostBody({postImage}: Pick<UserPostType, 'postImage'>) {
  return (
    <View style={styles.postImageContainer}>
      <Image source={postImage} style={styles.postImage} />
    </View>
  );
}

export default PostBody;
