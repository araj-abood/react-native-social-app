import {FlatList, View} from 'react-native';
import {
  StoriesSectionProps,
  userStoryData,
} from '../../types/stories-section-types';
import styles from './styles';
import StoryIcon from './components/story-icon';

function StoriesSection({data}: StoriesSectionProps) {
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
        data={data}
        renderItem={handleRenderStory}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default StoriesSection;
