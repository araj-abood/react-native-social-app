import {Text, View} from 'react-native';
import {userStoryData} from '../../../types/stories-section-types';
import styles from '../styles';
import ProfileImage from '../../profile-image';

function StoryIcon({profileImage, username}: userStoryData) {
  return (
    <View style={styles.storyIcon}>
      <ProfileImage profileImage={profileImage} />
      <Text style={styles.storyIconText}>{username}</Text>
    </View>
  );
}

export default StoryIcon;
