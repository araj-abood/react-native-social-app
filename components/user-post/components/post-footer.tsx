import {Text, View} from 'react-native';
import {UserPostType} from '../../../types/main-feed-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import styles from '../styles';
import {faBookmark, faComment} from '@fortawesome/free-regular-svg-icons';
import {horizontalScale} from '../../../utils/scaling';

function PostFooter({
  bookmarks,
  comments,
  likes,
}: Pick<UserPostType, 'bookmarks' | 'comments' | 'likes'>) {
  const size = horizontalScale(20);
  return (
    <View style={styles.postFooter}>
      <View style={styles.footerIconTextContainer}>
        <FontAwesomeIcon icon={faHeart} size={size} color="#616161" />
        <Text style={styles.footerText}>{likes}</Text>
      </View>
      <View style={styles.footerIconTextContainer}>
        <FontAwesomeIcon icon={faComment} size={size} color="#616161" />
        <Text style={styles.footerText}>{comments}</Text>
      </View>
      <View style={styles.footerIconTextContainer}>
        <FontAwesomeIcon icon={faBookmark} size={size} color="#616161" />
        <Text style={styles.footerText}>{bookmarks}</Text>
      </View>
    </View>
  );
}

export default PostFooter;
