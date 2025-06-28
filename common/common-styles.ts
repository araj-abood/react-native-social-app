import {StyleSheet} from 'react-native';
import {horizontalScale} from '../utils/scaling';

const commonStyles = StyleSheet.create({
  backgroundWhite: {backgroundColor: `#FFFFFF`},
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
  flexGrow: {
    flexGrow: 1,
  },
  flexOne: {
    flex: 1,
  },
});

export default commonStyles;
