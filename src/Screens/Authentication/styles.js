import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS_OVERPASS_TEXT,
  getFontSize,
  styleBase,
} from '../../Constants';

export const styles = StyleSheet.create({
  mainContainerView: {
    ...styleBase.flex1,
  },
  TicketContainerView: {
    ...styleBase.flex1,
    marginHorizontal: 30,
    paddingBottom: 30,
  },
  upperAppLogo: {
    alignSelf: 'center',
    marginVertical: 18,
  },
  OutterView: zIndex => ({
    position: 'absolute',
    backgroundColor: COLORS.white,
    zIndex,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 24,
  }),
  titleText: {
    fontSize: getFontSize(28),
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.black,
    marginBottom: 6,
  },
  shortText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.shortText,
    lineHeight: 22,
  },
  textInputView: {
    marginTop: 32,
  },
  InputView: {
    marginTop: 28,
  },
  mobileNo: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
    marginBottom: 10,
  },
  showMobileNoView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
    marginTop: 8,
  },
  phoneNumber: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
  },
  changeText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.primaryDefault,
    textDecorationLine: 'underline',
  },
  buttonStyle: {
    marginTop: 20,
  },
  lineSeprator: {
    backgroundColor: COLORS.white,
  },
  contentView: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 40,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  emailFieldsView: {
    marginTop: 40,
  },
  PwdFieldsView: {
    marginTop: 20,
  },
  headingText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
    marginBottom: 6,
  },
  TNCVew: {
    flexDirection: 'row',
    marginTop: 20,
  },
  checkBoxImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  termConditionText: {
    ...styleBase.text13,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.shortText,
    lineHeight: 20,
    marginLeft: 10,
  },
  highLightedText: {
    color: COLORS.primaryDefault,
    textDecorationLine: 'underline',
  },
  forgotPwdTxt: {
    ...styleBase.text15,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.primaryDefault,
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 32,
  },
  loginButtonStyle: {
    marginTop: 26,
  },
});
