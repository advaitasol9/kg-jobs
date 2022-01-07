import {StyleSheet} from 'react-native';
import {COLORS, FONTS_OVERPASS_TEXT, styleBase} from '../../Constants';

export const styles = StyleSheet.create({
  headerView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 36,
  },
  imageView: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.white,
    borderRadius: 26,
    ...styleBase.inCenter,
  },
  welcomeText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.white,
    marginLeft: 12,
  },
  UserNameText: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.BOLD,
    color: COLORS.white,
    marginLeft: 12,
  },
  bellicon: {
    width: 20,
    height: 22,
  },
  bottomView: {
    ...styleBase.flex1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 36,
  },
  searchView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
  },
  customViewStyle: {
    width: '80%',
  },
  filterView: {
    width: 52,
    height: 52,
    backgroundColor: COLORS.GraishGreen,
    ...styleBase.inCenter,
    borderRadius: 8,
  },
  filterIcon: {
    width: 18,
    height: 18,
    tintColor: COLORS.tabInactiveColor,
  },
  recentList: {
    ...styleBase.text24,
    color: COLORS.black,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
    marginTop: 18,
  },
  headingText: {
    ...styleBase.text16,
    color: COLORS.shortText,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    marginBottom: 24,
  },
  filter: (paddingTop, zIndex) => ({
    position: 'absolute',
    justifyContent: 'flex-end',
    zIndex,
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: COLORS.ModalBgColor,
  }),
  innerView: {
    ...styleBase.flex1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 20,
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
  helloText: {
    ...styleBase.text14,
    fontFamily: FONTS_OVERPASS_TEXT.REGULAR,
    color: COLORS.black,
    marginLeft: 8,
  },
  filterText: {
    ...styleBase.text18,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.black,
    marginLeft: 8,
  },
  headerContentView: {
    ...styleBase.inRow,
    ...styleBase.spaceBetween,
  },
  optionHeadingText: {
    ...styleBase.text16,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.black,
  },
  clearAllText: {
    ...styleBase.text14,
    fontFamily: FONTS_OVERPASS_TEXT.SEMI_BOLD,
    color: COLORS.black,
    textDecorationLine: 'underline',
  },
  DataView: {
    marginBottom: 48,
    marginTop: 12,
  },
  headingView: {
    marginTop: 24,
  },
  optionView: {
    marginRight: 15,
    marginTop: 8,
  },
  subTypeView: {
    ...styleBase.inRow,
    flexWrap: 'wrap',
  },
  optionBtn: {
    backgroundColor: COLORS.GraishGreen,
    paddingHorizontal: 16,
  },
  optionBtnText: {
    color: COLORS.tabInactiveColor,
  },
  closeBar: {
    alignSelf: 'center',
    marginTop: 13,
  },
  searchInputStyle: {
    marginBottom: 30,
  },
  appliedJob: {
    ...styleBase.text24,
    color: COLORS.black,
    fontFamily: FONTS_OVERPASS_TEXT.EXTRA_BOLD,
  },
  halfViewBtn: {
    width: '48%',
    marginBottom: 18,
  },
  jobBtns: isActive => ({
    backgroundColor: isActive ? COLORS.gray12 : COLORS.stockColor,
  }),
  labelStyle: isActive => ({
    color: isActive ? COLORS.white : COLORS.tabInactiveColor,
  }),
});
