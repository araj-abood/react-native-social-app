import {FlatList, View} from 'react-native';
import {
  StoriesSectionProps,
  userStoryData,
} from '../../types/stories-section-types';
import styles from './styles';
import StoryIcon from './components/story-icon';
import {useCallback, useEffect, useState} from 'react';

const USER_STORY_LIMIT = 4;

function StoriesSection({data}: StoriesSectionProps) {
  const [storiesCurrentPage, setStoriesCurrentPage] = useState<number>(1);
  const [userStories, setUserStories] = useState<userStoryData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetStories = useCallback(
    (page: number) => {
      console.log(page);
      const startIndex = (page - 1) * USER_STORY_LIMIT;
      const endingIndex = startIndex + USER_STORY_LIMIT;

      if (startIndex >= data.length) {
        return [];
      }

      return data.slice(startIndex, endingIndex);
    },
    [data],
  );

  const handleLoadMore = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    const nextStories = handleGetStories(storiesCurrentPage + 1);
    if (nextStories.length > 0) {
      setUserStories(prev => [...prev, ...nextStories]);
      setStoriesCurrentPage(storiesCurrentPage + 1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const getInitialData = handleGetStories(1);
    setUserStories(getInitialData);
    setIsLoading(false);
  }, [handleGetStories]);

  const handleRenderStory = ({item}: {item: userStoryData}) => {
    return (
      <StoryIcon
        id={item.id}
        profileImage={item.profileImage}
        username={item.username}
      />
    );
  };
  return (
    <View style={styles.storiesContainer}>
      <FlatList
        horizontal
        data={userStories}
        renderItem={handleRenderStory}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={1}
        onEndReached={handleLoadMore}
      />
    </View>
  );
}

export default StoriesSection;
