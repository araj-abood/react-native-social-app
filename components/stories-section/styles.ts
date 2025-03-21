import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

const styles = StyleSheet.create({
  storiesContainer: {
    marginTop: verticalScale(16),
  },

  storyIcon: {
    marginHorizontal: horizontalScale(10),
    alignItems: 'center',
  },
  storyIconText: {
    fontFamily: getFontFamily(undefined, '500'),
    fontSize: scaleFontSize(14),
    color: '#022150',
    marginTop: verticalScale(8),
  },
});

export default styles;
