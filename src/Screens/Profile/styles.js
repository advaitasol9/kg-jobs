import {StyleSheet} from 'react-native';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';

export const styles = StyleSheet.create({
  containerView: {
    padding: 20,
  },
  ImageView: {
    width: 116,
    height: 116,
    borderRadius: 58,
    overflow: 'hidden',
    borderWidth: 5,
    borderColor: COLORS.white,
    marginTop: 24,
  },
  profilePic: {
    width: 110,
    height: 110,
  },
  userNameText: {
    ...styleBase.text20,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.white,
    marginTop: 14,
  },
  emailNumberText: {
    ...styleBase.text14,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.white,
    marginTop: 4,
  },
  contentView: {
    ...styleBase.flex1,
    backgroundColor: COLORS.white,
    marginTop: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  customeLabelView: {
    marginTop: 16,
  },
  customContainer: {
    marginTop: 36,
  },
});
