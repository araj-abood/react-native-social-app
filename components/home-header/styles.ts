import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationContainer: {
    position: 'relative',
    padding: horizontalScale(15),
    borderRadius: scaleFontSize(100),
    backgroundColor: '#e4e7eb',
  },
  notificationNumberContainer: {
    position: 'absolute',
    top: verticalScale(-5),
    right: horizontalScale(-5),
    width: horizontalScale(15),
    aspectRatio: '1/1',
    borderRadius: scaleFontSize(100),
    alignItems: 'center',
    backgroundColor: '#f35BAC',
  },
  notifcationNumber: {
    color: '#FFF',
    fontSize: scaleFontSize(10),
    fontFamily: getFontFamily(undefined, '600'),
  },
  iconAndNumberContainer: {
    position: 'relative',
  },
});

export default styles;
