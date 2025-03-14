import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationContainer: {
    position: 'relative',
    padding: 15,
    borderRadius: 100,
    backgroundColor: '#e4e7eb',
  },
  notificationNumberContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 15,
    height: 15,
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: '#f35BAC',
  },
  notifcationNumber: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: getFontFamily(undefined, '600'),
  },
  iconAndNumberContainer: {
    position: 'relative',
  },
});

export default styles;
