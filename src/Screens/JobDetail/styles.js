import {StyleSheet} from 'react-native';
import {
  COLORS,
  DeviceHeight,
  FONTS_OVERPASS_TEXT,
  getFontSize,
  styleBase,
} from '../../Constants';

export const styles = StyleSheet.create({
  headerView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 36,
  },
  jobDetailsText: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.white,
  },
  bottomView: {
    ...styleBase.flex1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 36,
  },
  jobProfilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  jobTitleText: {
    ...styleBase.text20,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.black,
    marginLeft: 12,
  },
  jobWorkingCop: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.black,
    marginTop: 6,
    marginLeft: 12,
  },
  rightValueStyle: {
    color: COLORS.gray12,
    textDecorationLine: 'underline',
  },
  description: {
    ...styleBase.text20,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.black,
  },
  descriptionText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.tabInactiveColor,
    marginTop: 4,
  },
  jobDescriptionView: {
    marginTop: 30,
    marginBottom: 50,
  },
  closeBar: {
    alignSelf: 'center',
    marginTop: 13,
  },
  innerView: keyboardHeight => ({
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: DeviceHeight / 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    marginBottom: keyboardHeight,
  }),
  headerContentView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
    marginTop: 20,
  },
  nameIconView: {
    width: 50,
    height: 50,
    ...styleBase.inCenter,
  },
  NameFirstLetter: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    color: COLORS.white,
    position: 'absolute',
    zIndex: 1,
  },
  extraQuesText: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.black,
    marginLeft: 10,
  },
  inputField: {
    ...styleBase.text15,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.black,
  },
  inputFieldView: {
    marginTop: 30,
    backgroundColor: COLORS.GraishGreen,
    borderRadius: 6,
    padding: 16,
    height: '50%',
  },
  quesCount: {
    fontSize: getFontSize(30),
  },
  buttonStyle: {
    marginTop: 20,
  },
  valueColor: {
    color: COLORS.gray12,
  },
});
