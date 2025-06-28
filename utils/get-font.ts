import {FontWeights} from '../types/get-font-types';

type FontsNames = 'Inter';

function getFontFamily(baseFont: FontsNames = 'Inter', weight: FontWeights) {
  let font = `${baseFont}_18pt`;
  switch (weight) {
    case '100':
      font += '-Thin';
      break;

    case '200':
      font += '-ExtraLight';
      break;

    case '300':
      font += '-Light';
      break;

    case '400':
    case 'normal':
      font += '-Regular';
      break;

    case '500':
      font += ' -Medium';
      break;

    case '600':
      font += '-SemiBold';
      break;

    case 'bold':
    case '700':
      font += '-Bold';
      break;

    case '800':
      font += '-ExtraBold';
      break;

    case '900':
      font += '-Black';
      break;

    default:
      font += '-Regular';
  }
  return font;
}

export default getFontFamily;
