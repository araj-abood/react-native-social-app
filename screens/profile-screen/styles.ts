import {StyleSheet} from 'react-native';
import commonStyles from '../../common/common-styles';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';
import getFontFamily from '../../utils/get-font';

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    ...commonStyles.backgroundWhite,
  },
  scrollViewContainer: {
    ...commonStyles.flexGrow,
  },
  profilePicContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profilePicBorder: {
    borderRadius: horizontalScale(65),
    padding: horizontalScale(2),
    borderWidth: 2,
    borderColor: '#0150EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Inter', '600'),
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9E9E9',
  },
  statsNumber: {
    fontSize: scaleFontSize(20),
    fontFamily: getFontFamily('Inter', '600'),
    color: '#022150',
    textAlign: 'center',
  },
  statsLabel: {
    fontFamily: getFontFamily('Inter', '300'),
    fontSize: scaleFontSize(18),
    color: '#79689f',
    textAlign: 'center',
  },
  statsBorder: {
    borderRightWidth: horizontalScale(1),
    borderColor: '#E9E9E9',
  },
});

export default styles;
