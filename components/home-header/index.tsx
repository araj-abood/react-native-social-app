import {Text, TouchableOpacity, View} from 'react-native';
import Title from '../title';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {horizontalScale} from '../../utils/scaling';

function HomeHeader() {
  return (
    <View style={styles.container}>
      <Title text="Let's Explore" />
      <TouchableOpacity style={styles.notificationContainer}>
        <TouchableOpacity style={styles.iconAndNumberContainer}>
          <FontAwesomeIcon
            icon={faEnvelope}
            color="#898DAE"
            size={horizontalScale(20)}
          />
          <View style={styles.notificationNumberContainer}>
            <Text style={styles.notifcationNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

export default HomeHeader;
