import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: 24,
    fontFamily: getFontFamily(undefined, 'bold'),
  },
});

export default styles;
