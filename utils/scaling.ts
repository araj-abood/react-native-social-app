import {Dimensions} from 'react-native';
import {hasNotch} from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !hasNotch();

const guideLineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};

export const horizontalScale = (size: number) =>
  (width / guideLineBaseWidth()) * size;

const guideLineBaseHeight = () => {
  if (!isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

export const verticalScale = (size: number) =>
  (height / guideLineBaseHeight()) * size;

const guideLineBaseFont = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

export const scaleFontSize = (size: number) =>
  Math.round((width / guideLineBaseFont()) * size);
