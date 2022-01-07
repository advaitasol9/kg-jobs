import {StyleSheet} from 'react-native';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../../Constants';

export const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.PLaceholderColor,
    paddingHorizontal: 6,
  },
  innerView: {
    height: '85%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  professionalInfo: {
    ...styleBase.text24,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
  },
  customViewStyle: {
    marginTop: 36,
  },
  buttonStyle: {
    marginTop: 16,
  },
});
