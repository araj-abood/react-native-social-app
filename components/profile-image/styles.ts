import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

const styles = StyleSheet.create({
  profileImageBorder: {
    borderRadius: scaleFontSize(1000),
    alignSelf: 'flex-start',
    paddingHorizontal: horizontalScale(2),
    paddingVertical: verticalScale(2),
    borderWidth: 1,
    borderColor: '#F35BAC',
  },
});

export default styles;
