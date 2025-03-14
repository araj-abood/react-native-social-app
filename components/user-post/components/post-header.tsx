import {Text, View} from 'react-native';
import {UserPostType} from '../../../types/main-feed-types';
import ProfileImage from '../../profile-image';
import styles from '../styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';

function PostHeader(
  item: Pick<UserPostType, 'location' | 'profileImage' | 'username'>,
) {
  return (
    <View style={styles.postHeader}>
      <View style={styles.postProfile}>
        <ProfileImage profileImage={item.profileImage} imageSize={45} />
        <View style={styles.postNameContainer}>
          <Text style={styles.postUsername}>{item.username}</Text>
          <Text style={styles.postLocation}>{item.location}</Text>
        </View>
      </View>
      <FontAwesomeIcon icon={faEllipsis} size={24} color={'#616161'} />
    </View>
  );
}

export default PostHeader;
