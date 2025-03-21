import {FlatList, View} from 'react-native';
import {MainFeedProps, UserPostType} from '../../types/main-feed-types';
import UserPost from '../user-post';
import {useCallback, useEffect, useState} from 'react';
import MainFeedTop from './components/main-feed-top';

const POSTS_LIMIT = 4;

function MainFeed({posts}: MainFeedProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPosts, setCurrentPosts] = useState<UserPostType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPosts = useCallback(
    (page: number) => {
      const startIndex = (page - 1) * 4;
      const endIndex = startIndex + POSTS_LIMIT;

      return posts.slice(startIndex, endIndex);
    },
    [posts],
  );

  useEffect(() => {
    setIsLoading(true);
    const newPosts = getPosts(1);
    setCurrentPosts(newPosts ? newPosts : []);
    setIsLoading(false);
  }, [getPosts]);

  const handleLoadMore = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    const newPosts = getPosts(currentPage + 1);

    if (newPosts.length > 0) {
      setCurrentPosts(prev => [...prev, ...newPosts]);
      setCurrentPage(currentPage + 1);
    }
    setIsLoading(false);
  };

  const handleRenderPost = ({item}: {item: UserPostType}) => {
    return <UserPost {...item} />;
  };
  return (
    <View>
      <FlatList
        ListHeaderComponent={MainFeedTop}
        data={currentPosts}
        renderItem={handleRenderPost}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
      />
    </View>
  );
}

export default MainFeed;
