import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';

const styles = StyleSheet.create({
  storiesContainer: {
    marginTop: 16,
    paddingHorizontal: 28,
    height: 100,
  },

  storyIcon: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  storyIconText: {
    fontFamily: getFontFamily(undefined, '500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
  },
});

export default styles;
