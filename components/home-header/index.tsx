import {Text, TouchableOpacity, View} from 'react-native';
import Title from '../title';
import styles from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

function HomeHeader() {
  return (
    <View style={styles.container}>
      <Title text="Let's Explore" />
      <TouchableOpacity style={styles.notificationContainer}>
        <View style={styles.iconAndNumberContainer}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
          <View style={styles.notificationNumberContainer}>
            <Text style={styles.notifcationNumber}>2</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HomeHeader;
