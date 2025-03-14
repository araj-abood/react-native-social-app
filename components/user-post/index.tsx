import {View} from 'react-native';
import {UserPostType} from '../../types/main-feed-types';
import styles from './styles';
import PostHeader from './components/post-header';
import PostBody from './components/post-body';
import PostFooter from './components/post-footer';

function UserPost(item: UserPostType) {
  return (
    <View style={styles.postContainer}>
      <PostHeader
        location={item.location}
        profileImage={item.profileImage}
        username={item.username}
      />
      <PostBody postImage={item.postImage} />
      <PostFooter
        bookmarks={item.bookmarks}
        comments={item.bookmarks}
        likes={item.likes}
      />
    </View>
  );
}

export default UserPost;
