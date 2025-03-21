import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';
import {scaleFontSize} from '../../utils/scaling';

const styles = StyleSheet.create({
  title: {
    color: '#022150',
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily(undefined, 'bold'),
  },
});

export default styles;
