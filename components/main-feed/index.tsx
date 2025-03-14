import {FlatList, View} from 'react-native';
import {MainFeedProps, UserPostType} from '../../types/main-feed-types';
import UserPost from '../user-post';
import styles from './styles';

function MainFeed({posts}: MainFeedProps) {
  const handleRenderPost = ({item}: {item: UserPostType}) => {
    return <UserPost {...item} />;
  };
  return (
    <View style={styles.mainFeedContainer}>
      <FlatList
        data={posts}
        renderItem={handleRenderPost}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default MainFeed;
