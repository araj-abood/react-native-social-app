import {Text} from 'react-native';
import {TitleProps} from '../../types/title-type';
import styles from './styles';

function Title({text, overrideStyle}: TitleProps) {
  return <Text style={[styles.title, overrideStyle]}>{text}</Text>;
}

export default Title;
