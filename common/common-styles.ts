import {StyleSheet} from 'react-native';
import {horizontalScale} from '../utils/scaling';

const commonStyles = StyleSheet.create({
  marginLeftLarge: {
    marginLeft: horizontalScale(27),
  },
  marginRightMediuem: {marginRight: horizontalScale(17)},
  marginXMedium: {
    marginHorizontal: horizontalScale(24),
  },

  flexRow: {
    flexDirection: 'row',
  },
});

export default commonStyles;
