import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scaling';

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: verticalScale(12),
    marginHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(24),
    borderBottomColor: '#adadad',
    borderBottomWidth: 1,
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postProfile: {
    flexDirection: 'row',
  },
  postUsername: {
    fontFamily: getFontFamily(undefined, '700'),
    fontSize: scaleFontSize(16),
  },
  postNameContainer: {
    marginLeft: horizontalScale(12),
  },
  postLocation: {
    fontFamily: getFontFamily(undefined, '400'),
    fontSize: scaleFontSize(14),
    color: '#616161',
  },
  postImageContainer: {
    marginTop: verticalScale(12),
    overflow: 'hidden',
    borderRadius: scaleFontSize(10),
  },
  postImage: {
    width: '100%',
  },
  postFooter: {
    marginTop: verticalScale(12),
    flexDirection: 'row',
    gap: horizontalScale(19),
  },
  footerIconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(4),
  },
  footerText: {
    fontFamily: getFontFamily(undefined, '500'),
    color: '#616161',
  },
});

export default styles;
