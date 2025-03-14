import {StyleSheet} from 'react-native';
import getFontFamily from '../../utils/get-font';

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 12,
    paddingBottom: 24,
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
    fontSize: 16,
  },
  postNameContainer: {
    marginLeft: 12,
  },
  postLocation: {
    fontFamily: getFontFamily(undefined, '400'),
    fontSize: 14,
    color: '#616161',
  },
  postImageContainer: {
    marginTop: 12,
    overflow: 'hidden',
    borderRadius: 10,
  },
  postImage: {
    width: '100%',
  },
  postFooter: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 19,
  },
  footerIconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerText: {
    fontFamily: getFontFamily(undefined, '500'),
    color: '#616161',
  },
});

export default styles;
